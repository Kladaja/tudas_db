const express = require('express');
const router = express.Router();
const { getConnection } = require('../db');
const oracledb = require('oracledb');

router.get('/', async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.execute(
            `SELECT 
                a.articleID,
                a.title,
                DBMS_LOB.SUBSTR(a.curriculum, 4000, 1) AS curriculum,
                a.creation_date,
                DEREF(a.author).name AS author,
                (SELECT CAST(COLLECT(k.keywordID) AS SYS.ODCIVARCHAR2LIST)
                FROM TABLE(a.keywords) k) AS keywords,
                (SELECT CAST(COLLECT(c.categoryID) AS SYS.ODCIVARCHAR2LIST)
                FROM TABLE(a.categories) c) AS categories
                FROM Articles a`,
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );

        await connection.close();
        res.json(result.rows);
    } catch (err) {
        console.error('DB query error:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await getConnection();
        const result = await connection.execute(
            `SELECT 
                a.articleID,
                a.title,
                DBMS_LOB.SUBSTR(a.curriculum, 4000, 1) AS curriculum,
                a.creation_date,
                DEREF(a.author).name AS author,
                (SELECT CAST(COLLECT(k.keywordID) AS SYS.ODCIVARCHAR2LIST)
                FROM TABLE(a.keywords) k) AS keywords,
                (SELECT CAST(COLLECT(c.categoryID) AS SYS.ODCIVARCHAR2LIST)
                FROM TABLE(a.categories) c) AS categories
                FROM Articles a
                WHERE a.articleID = :id`,
            [id],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );

        await connection.close();

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Article not found" });
        }

        res.json(result.rows[0]);
    } catch (err) {
        console.error('DB query error:', err);
        res.status(500).json({ error: 'Database error' });
    }
});


module.exports = router;
