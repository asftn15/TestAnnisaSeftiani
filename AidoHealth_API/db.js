const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "TestAnnisa",
    password: "C0nsultancy2013",
    port: 5432,
});

module.exports = pool;
