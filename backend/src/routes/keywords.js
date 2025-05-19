const express = require('express');
const router = express.Router();
const { getConnection } = require('../db');
const oracledb = require('oracledb');

router.get("/", async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.execute(
            `SELECT keywordID FROM Keywords`,
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        await connection.close();

        const keywords = result.rows.map(row => row.KEYWORDID);
        res.json(keywords);
    } catch (err) {
        console.error('DB query error (keywords):', err);
        res.status(500).json({ error: 'Database error' });
    }
});

module.exports = router;
