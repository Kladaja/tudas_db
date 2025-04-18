const express = require('express');
const router = express.Router();
const { getConnection } = require('../db');
const oracledb = require('oracledb');

router.get('/', async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.execute(
            `SELECT b.bugID, b.description, b.state, DEREF(b.article).title AS article_title, DEREF(b.reporter).name AS reporter_name FROM Bugs b`,
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT, fetchInfo: { DESCRIPTION: { type: oracledb.STRING } } }
        );
        await connection.close();
        res.json(result.rows);
    } catch (err) {
        console.error('DB error (bugs):', err);
        res.status(500).json({ error: 'Database error' });
    }
});

module.exports = router;
