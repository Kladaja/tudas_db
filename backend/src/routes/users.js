const express = require('express');
const router = express.Router();
const { getConnection } = require('../db');
const oracledb = require('oracledb');

router.get('/', async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.execute(
            `SELECT userID, name, email, registration_date, role FROM Users`,
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        await connection.close();
        res.json(result.rows);
    } catch (err) {
        console.error('DB error (users):', err);
        res.status(500).json({ error: 'Database error' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const connection = await getConnection();
        const result = await connection.execute(
            `SELECT userID, name, email, password, role FROM Users WHERE email = :email`,
            [email],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );

        await connection.close();

        if (result.rows.length === 0) {
            return res.status(401).json({ error: "Hibás email vagy jelszó" });
        }

        const user = result.rows[0];

        if (user.PASSWORD !== password) {
            return res.status(401).json({ error: "Hibás email vagy jelszó" });
        }

        res.json({
            userID: user.USERID,
            name: user.NAME,
            email: user.EMAIL,
            role: user.ROLE
        });

    } catch (err) {
        console.error('Login hiba:', err);
        res.status(500).json({ error: "Szerverhiba" });
    }
});

module.exports = router;
