const pool = require('../config/db');

async function findUserByEmail(email) {
    const result = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email.trim().toLowerCase()]
    );

    return result.rows[0] || null;
}

async function createUser(first_name, last_name, email, passwordHash) {
    const result = await pool.query(
        `INSERT INTO users (first_name, last_name, email, password_hash)
         VALUES ($1, $2, $3, $4)
         RETURNING id, first_name, last_name, email`,
        [first_name, last_name, email, passwordHash]
    );

    return result.rows[0];
}

async function findUserById(id) {
    const result = await pool.query(
        'SELECT id, first_name, last_name, email FROM users WHERE id = $1',
        [id]
    );

    return result.rows[0] || null;
}




module.exports = {
    findUserByEmail,
    findUserById,
    createUser,
};

// i left out username because we already have id??? so no need
// trying to follow what moodle does