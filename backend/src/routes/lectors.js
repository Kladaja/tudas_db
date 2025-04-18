const express = require('express');
const router = express.Router();
const { getConnection } = require('../db');
const oracledb = require('oracledb');

router.get('/', async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.execute(
            `SELECT userID, name, email, field, scientific_rank FROM Lectors`,
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        await connection.close();
        res.json(result.rows);
    } catch (err) {
        console.error('DB error (lectors):', err);
        res.status(500).json({ error: 'Database error' });
    }
});

module.exports = router;
