const db = require('../utils/db');


const run = () => {

    return new Promise((resolve, reject) => {    
        db.query(`CREATE TABLE IF NOT EXISTS categories (
            ID INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            name VARCHAR(255) NOT NULL,
            type ENUM('income', 'expense') NOT NULL,
            color VARCHAR(7) NOT NULL,
            icon VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(ID)
        )`, (err, result) => {
            if (err) {
                console.error('Error creating categories table:', err)
                return reject(err)
            } else {
                console.log('Categories table created or already exists.')
                return resolve(result)
            }
        })
    })
}

module.exports = {run}