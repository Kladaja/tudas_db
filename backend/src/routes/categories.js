const express = require('express');
const router = express.Router();
const { getConnection } = require('../db');
const oracledb = require('oracledb');

router.get("/", async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.execute(
            `SELECT categoryID FROM Categories`,
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        await connection.close();

        const categories = result.rows.map(row => row.CATEGORYID);
        res.json(categories);
    } catch (err) {
        console.error('DB query error (categories):', err);
        res.status(500).json({ error: 'Database error' });
    }
});

module.exports = router;
