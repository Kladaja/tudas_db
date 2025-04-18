const oracledb = require('oracledb');

const dbConfig = {
    user: 'system',
    password: 'oracle',
    connectString: 'oracle-db:1521/XEPDB1',
};

async function getConnection() {
    try {
        return await oracledb.getConnection(dbConfig);
    } catch (err) {
        console.error('Error getting DB connection:', err);
        throw err;
    }
}

module.exports = { getConnection };
