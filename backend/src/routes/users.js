const express = require('express');
const router = express.Router();
const { getConnection } = require('../db');
const oracledb = require('oracledb');

router.get('/', async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.execute(
            `SELECT userID, name, email, registration_date, role, confirmed FROM Users`,
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        await connection.close();
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Database error' });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const connection = await getConnection();
        const result = await connection.execute(
            `SELECT userID, name, email, registration_date, role, confirmed FROM Users WHERE userID = :id`,
            [id],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        await connection.close();
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Database error' });
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const connection = await getConnection();
        let result = await connection.execute(
            `SELECT userID, name, email, password, role FROM Users WHERE email = :email`,
            [email],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        if (result.rows.length === 0) {
            result = await connection.execute(
                `SELECT userID, name, email, password, role FROM Lectors WHERE email = :email`,
                [email],
                { outFormat: oracledb.OUT_FORMAT_OBJECT }
            );
        }
        if (result.rows.length === 0) {
            await connection.close();
            return res.status(401).json({ error: "Wrong email or password!" });
        }
        const user = result.rows[0];
        if (user.PASSWORD !== password) {
            await connection.close();
            return res.status(401).json({ error: "Wrong email or password!" });
        }

        res.json({
            userID: user.USERID,
            name: user.NAME,
            email: user.EMAIL,
            role: user.ROLE
        });
        await connection.close();
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});


router.post('/register', async (req, res) => {
    const { name, email, password, role, field, scientific_rank } = req.body;
    const confirmed = 0;

    if (!name || !email || !password || !role) {
        return res.status(400).json({ error: 'Missing required fields!' });
    }
    try {
        const connection = await getConnection();
        const emailCheck = await connection.execute(
            `SELECT COUNT(*) AS count FROM Users WHERE email = :email`,
            [email],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        if (emailCheck.rows[0].COUNT > 0) {
            await connection.close();
            return res.status(400).json({ error: 'The email is already in use!' });
        }
        const userIDResult = await connection.execute(
            `SELECT user_seq_custom.NEXTVAL AS userID FROM dual`,
            [],
            { outFormat: oracledb.OUT_FORMAT_OBJECT }
        );
        const userID = userIDResult.rows[0].USERID;
        if (role === 'lector') {
            if (!field || !scientific_rank) {
                await connection.close();
                return res.status(400).json({ error: 'Missing required fields!' });
            }

            await connection.execute(
                `INSERT INTO Lectors VALUES (
                    T_Lector(:userID, :name, :email, :password, SYSDATE, :role, :confirmed, :field, :scientific_rank)
                )`,
                { userID, name, email, password, role, confirmed, field, scientific_rank }
            );
        } else {
            await connection.execute(
                `INSERT INTO Users VALUES (
                    T_User(:userID, :name, :email, :password, SYSDATE, :role, :confirmed)
                )`,
                { userID, name, email, password, role, confirmed }
            );
        }
        await connection.commit();
        await connection.close();
        res.status(201).json({ message: 'Successful registration!' });
    } catch (err) {
        console.error('Registration error: ', err);
        res.status(500).json({ error: 'Server error!' });
    }
});

module.exports = router;