const db = require('../utils/db');


const run = () => {

    return new Promise((resolve, reject) => {    
        db.query(`CREATE TABLE IF NOT EXISTS transfers (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            source_wallet_id INT NOT NULL,
            target_wallet_id INT NOT NULL,
            amount DECIMAL(10, 2) NOT NULL,
            credited_amount DECIMAL(10, 2) NOT NULL,
            date DATETIME NOT NULL,
            description VARCHAR(255),
            FOREIGN KEY (user_id) REFERENCES users(id),
            FOREIGN KEY (source_wallet_id) REFERENCES wallets(id),
            FOREIGN KEY (target_wallet_id) REFERENCES wallets(id)
        )`, (err, result) => {
            if (err) {
                console.error('Error creating transfers table:', err)
                return reject(err)
            } else {
                console.log('Transfers table created or already exists.')
                return resolve(result)
            }
        })
    })
}

module.exports = {run}