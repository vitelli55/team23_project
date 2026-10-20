require('dotenv').config({path: '../../../.env'});

const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

module.exports = pool;


/*
a connection pool manages reusable database connections.
instead of establishing a completely new connection for every request, the backend can obtain connections from this pool.
eg:
const result = await pool.query('SELECT NOW()');

console.log(result.rows);
*/

