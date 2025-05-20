const express = require("express");
const router = express.Router();
const { getConnection } = require("../db");

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const connection = await getConnection();
    try {
        const result = await connection.execute(
            `SELECT 
                b.bugID,
                DBMS_LOB.SUBSTR(b.description, 4000, 1) AS description,
                b.state,
                DEREF(b.article).articleID AS articleID,
                DEREF(b.reporter).userID AS reporterID
            FROM Bugs b
            WHERE b.bugID = :id`,
            [id],
            { outFormat: require('oracledb').OUT_FORMAT_OBJECT }
        );
        const bugs = result.rows.map(row => ({
            bugID: row.BUGID,
            description: row.DESCRIPTION,
            state: row.STATE,
            articleID: row.ARTICLEID,
            reporterID: row.REPORTERID
        }));
        res.json(bugs[0]);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch bug" });
    } finally {
        if (connection) await connection.close();
    }
});

router.get("/article/:articleID", async (req, res) => {
    const { articleID } = req.params;
    let connection;
    try {
        connection = await getConnection();
        const result = await connection.execute(
            `SELECT 
                b.bugID,
                DBMS_LOB.SUBSTR(b.description, 4000, 1) AS description,
                b.state,
                DEREF(b.article).articleID AS articleID,
                DEREF(b.reporter).userID AS reporterID
            FROM Bugs b
            WHERE b.article = (SELECT REF(a) FROM Articles a WHERE a.articleID = :articleID)`,
            [articleID],
            { outFormat: require('oracledb').OUT_FORMAT_OBJECT }
        );
        const bugs = result.rows.map(row => ({
            bugID: row.BUGID,
            description: row.DESCRIPTION,
            state: row.STATE,
            articleID: row.ARTICLEID,
            reporterID: row.REPORTERID
        }));
        res.json(bugs);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch bugs for article." });
    } finally {
        if (connection) await connection.close();
    }
});

router.post("/add", async (req, res) => {
    const { articleID, description, state, reporterID } = req.body;
    const connection = await getConnection();
    try {
        await connection.execute(
            `INSERT INTO Bugs VALUES (
                T_Bug(
                    bug_seq_custom.NEXTVAL,
                    :description,
                    :state,
                    (SELECT REF(a) FROM Articles a WHERE a.articleID = :articleID),
                    (SELECT REF(u) FROM Users u WHERE u.userID = :reporterID)
                )
            )`,
            { description, state, articleID, reporterID },
            { autoCommit: true }
        );
        res.json({ message: "Bug created successfully" });
    } catch (err) {
        console.error("Create bug error:", err);
        res.status(500).json({ error: "Failed to create bug" });
    } finally {
        await connection.close();
    }
});

router.put("/update/:id", async (req, res) => {
    const { id } = req.params;
    const { description, state } = req.body;
    const connection = await getConnection();
    try {
        const result = await connection.execute(
            `UPDATE Bugs b
             SET b.description = :description,
                 b.state = :state
             WHERE b.bugID = :id`,
            { description, state, id },
            { autoCommit: true }
        );
        if (result.rowsAffected === 0) {
            return res.status(404).json({ error: "Bug not found" });
        }
        res.json({ message: "Bug updated successfully" });
    } catch (err) {
        console.error("Update bug error:", err);
        res.status(500).json({ error: "Failed to update bug" });
    } finally {
        await connection.close();
    }
});

module.exports = router;