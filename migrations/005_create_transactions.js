const db = require('../utils/db');


const run = () => {

    return new Promise((resolve, reject) => {    
        db.query(`CREATE TABLE IF NOT EXISTS transactions (
            id INT AUTO_INCREMENT PRIMARY KEY,
            wallet_id INT NOT NULL,
            category_id INT NOT NULL,
            type ENUM('income', 'expense') NOT NULL,
            amount DECIMAL(10, 2) NOT NULL,
            description VARCHAR(255),
            date DATETIME NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            frequent_transaction_id INT,
            FOREIGN KEY (wallet_id) REFERENCES wallets(id),
            FOREIGN KEY (category_id) REFERENCES categories(id),
            FOREIGN KEY (frequent_transaction_id) REFERENCES frequent_transactions(id)
        )`, (err, result) => {
            if (err) {
                console.error('Error creating transactions table:', err)
                return reject(err)
            } else {
                console.log('Transactions table created or already exists.')
                return resolve(result)
            }
        })
    })
}

module.exports = {run}