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
                a.edit_date,
                a.review_date,
                DEREF(a.author).name AS author_name,
                DEREF(a.author).userID AS author_id,
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
        console.error('DB query error (articles):', err);
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
                a.edit_date,
                a.review_date,
                DEREF(a.author).name AS author_name,
                DEREF(a.author).userID AS author_id,
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
        if (result.rows.length === 0) { return res.status(404).json({ error: "Article not found" }); }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Database error' });
    }
});

router.get('/by-author/:authorID', async (req, res) => {
    const { authorID } = req.params;
    const connection = await getConnection();

    try {
        const result = await connection.execute(`
            SELECT 
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
            WHERE DEREF(a.author).userID = :authorID
        `, [authorID], { outFormat: oracledb.OUT_FORMAT_OBJECT });

        const articles = result.rows.map(row => ({
            ARTICLEID: row.ARTICLEID,
            TITLE: row.TITLE,
            CURRICULUM: row.CURRICULUM,
            CREATION_DATE: row.CREATION_DATE,
            AUTHOR: row.AUTHOR,
            KEYWORDS: row.KEYWORDS || [],
            CATEGORIES: row.CATEGORIES || []
        }));

        res.json(articles);
    } catch (err) {
        console.error("Error fetching author's articles:", err);
        res.status(500).json({ error: "Failed to fetch articles" });
    } finally {
        await connection.close();
    }
});

router.post('/add', async (req, res) => {
    const { title, content, keywords = [], categories = [], authorID } = req.body;
    const connection = await getConnection();
    async function insertIfNotExists(connection, table, typeName, column, value) {
        const check = await connection.execute(
            `SELECT COUNT(*) AS COUNT FROM ${table} t WHERE t.${column} = :value`,
            [value]
        );
        const count = check.rows[0].COUNT || check.rows[0][0];
        if (count === 0) {
            await connection.execute(
                `INSERT INTO ${table} VALUES (${typeName}(:value))`,
                [value]
            );
        }
    }
    try {
        for (const kw of keywords) { await insertIfNotExists(connection, 'Keywords', 'T_Keyword', 'keywordID', kw); }
        for (const cat of categories) { await insertIfNotExists(connection, 'Categories', 'T_Category', 'categoryID', cat); }
        const result = await connection.execute(
            `INSERT INTO Articles VALUES (
                T_Article(
                    article_seq_custom.NEXTVAL,
                    :title,
                    :curriculum,
                    SYSDATE,
                    NULL,
                    NULL,
                    KeywordList(${keywords.map((_, i) => `T_Keyword(:k${i})`).join(', ')}),
                    CategoryList(${categories.map((_, i) => `T_Category(:c${i})`).join(', ')}),
                    (SELECT REF(u) FROM Users u WHERE u.userID = :authorID)
                )
            )`,
            {
                title,
                curriculum: content,
                authorID,
                ...Object.fromEntries(keywords.map((k, i) => [`k${i}`, k])),
                ...Object.fromEntries(categories.map((c, i) => [`c${i}`, c]))
            },
            { autoCommit: true }
        );
        res.status(201).json({ message: "Article created" });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create article' });
    } finally {
        await connection.close();
    }
});

router.put('/update/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content, keywords = [], categories = [], authorID } = req.body;
    const connection = await getConnection();
    async function insertIfNotExists(connection, table, typeName, column, value) {
        const check = await connection.execute(
            `SELECT COUNT(*) AS COUNT FROM ${table} t WHERE t.${column} = :value`,
            [value]
        );
        const count = check.rows[0].COUNT || check.rows[0][0];
        if (count === 0) {
            await connection.execute(
                `INSERT INTO ${table} VALUES (${typeName}(:value))`,
                [value]
            );
        }
    }
    try {
        for (const kw of keywords) { await insertIfNotExists(connection, 'Keywords', 'T_Keyword', 'keywordID', kw); }
        for (const cat of categories) { await insertIfNotExists(connection, 'Categories', 'T_Category', 'categoryID', cat); }
        await connection.execute(
            `UPDATE Articles a SET
                a.title = :title,
                a.curriculum = :curriculum,
                a.edit_date = SYSDATE
             WHERE a.articleID = :id AND DEREF(a.author).userID = :authorID`,
            { id, title, curriculum: content, authorID }
        );
        await connection.execute(
            `UPDATE Articles a SET
                a.keywords = KeywordList(),
                a.categories = CategoryList()
             WHERE a.articleID = :id`,
            { id }
        );
        const keywordList = keywords.map((_, i) => `T_Keyword(:k${i})`).join(', ');
        const categoryList = categories.map((_, i) => `T_Category(:c${i})`).join(', ');
        await connection.execute(
            `UPDATE Articles a SET
                a.keywords = KeywordList(${keywordList}),
                a.categories = CategoryList(${categoryList})
             WHERE a.articleID = :id`,
            {
                id,
                ...Object.fromEntries(keywords.map((k, i) => [`k${i}`, k])),
                ...Object.fromEntries(categories.map((c, i) => [`c${i}`, c]))
            },
            { autoCommit: true }
        );
        res.json({ message: "Article updated" });
    } catch (err) {
        console.error('Update error:', err);
        res.status(500).json({ error: 'Failed to update article' });
    } finally {
        await connection.close();
    }
});

router.patch('/review/:id', async (req, res) => {
    const { id } = req.params;
    const { reviewDate } = req.body;

    try {
        const connection = await getConnection();

        let query, params;

        if (reviewDate === null) {
            query = `UPDATE Articles SET review_date = NULL WHERE articleID = :id`;
            params = [id];
        } else {
            query = `UPDATE Articles SET review_date = TO_DATE(:reviewDate, 'YYYY-MM-DD"T"HH24:MI:SS"Z"') WHERE articleID = :id`;
            params = [reviewDate, id];
        }

        await connection.execute(query, params, { autoCommit: true });
        await connection.close();

        res.json({ message: "Review date updated." });
    } catch (err) {
        console.error("DB error:", err);
        res.status(500).json({ error: "Database error." });
    }
});

router.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const { authorID } = req.query; // 👈 innen kell kiolvasni

    const connection = await getConnection();
    try {
        const result = await connection.execute(
            `DELETE FROM Articles a 
             WHERE a.articleID = :id AND DEREF(a.author).userID = :authorID`,
            { id, authorID },
            { autoCommit: true }
        );
        if (result.rowsAffected === 0) {
            return res.status(404).json({ message: "Article not found or unauthorized" });
        }
        res.json({ message: "Article deleted" });
    } catch (err) {
        console.error('Delete error:', err);
        res.status(500).json({ error: 'Failed to delete article' });
    } finally {
        await connection.close();
    }
});

module.exports = router;