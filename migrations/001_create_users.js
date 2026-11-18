const db = require('../utils/db');


const run = () => {

    return new Promise((resolve, reject) => {    
        db.query(`CREATE TABLE IF NOT EXISTS users (
            ID INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            passwd varchar(40) NOT NULL,
            registered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )`, (err, result) => {
            if (err) {
                console.error('Error creating users table:', err)
                return reject(err)
            } else {
                console.log('Users table created or already exists.')
                return resolve(result)
            }
        })
    })
}

module.exports = {run}