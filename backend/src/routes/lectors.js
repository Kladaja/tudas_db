const express = require('express');
const router = express.Router();
const { getConnection } = require('../db');
const oracledb = require('oracledb');

router.get('/', async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.execute(
            `SELECT userID, name, email, field, scientific_rank, confirmed FROM Lectors`,
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

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await getConnection();
        const result = await connection.execute(
            `SELECT userID, name, email, field, scientific_rank, confirmed FROM Lectors WHERE userID = :id`,
            [id],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        await connection.close();
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Lector not found" });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Database error' });
    }
});

router.patch('/confirm/:id', async (req, res) => {
    const { id } = req.params;
    const { confirmed } = req.body;
    if (typeof confirmed !== 'number' || (confirmed !== 0 && confirmed !== 1)) {
        return res.status(400).json({ error: 'Invalid confirmed value. Use 0 or 1.' });
    }
    try {
        const connection = await getConnection();
        const result = await connection.execute(
            `UPDATE Lectors SET confirmed = :confirmed WHERE userID = :id`,
            [confirmed, id],
            { autoCommit: true }
        );
        if (result.rowsAffected === 0) {
            await connection.close();
            return res.status(404).json({ error: 'Lector not found.' });
        }

        await connection.close();
        res.json({ message: `Lector ${confirmed === 1 ? 'confirmed' : 'revoked'} successfully.` });
    } catch (err) {
        res.status(500).json({ error: 'Database error.' });
    }
});

module.exports = router;