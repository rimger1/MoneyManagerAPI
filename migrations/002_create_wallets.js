const db = require('../utils/db');


const run = () => {

    return new Promise((resolve, reject) => {    
        db.query(`CREATE TABLE IF NOT EXISTS wallets (
            ID INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            name VARCHAR(255) NOT NULL,
            description TEXT,
            currency VARCHAR(10) NOT NULL,
            starter_balance DECIMAL(10, 2) NOT NULL,
            balance DECIMAL(10, 2) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(ID)
        )`, (err, result) => {
            if (err) {
                console.error('Error creating wallets table:', err)
                return reject(err)
            } else {
                console.log('Wallets table created or already exists.')
                return resolve(result)
            }
        })
    })
}

module.exports = {run}