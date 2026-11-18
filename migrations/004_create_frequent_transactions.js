const db = require('../utils/db');


const run = () => {

    return new Promise((resolve, reject) => {    
        db.query(`CREATE TABLE IF NOT EXISTS frequent_transactions (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT NOT NULL,
            wallet_id INT NOT NULL,
            category_id INT NOT NULL,
            transaction_type ENUM('income', 'expense') NOT NULL,
            amount DECIMAL(10, 2) NOT NULL,
            frequency ENUM('daily', 'weekly', 'monthly', 'yearly') NOT NULL,
            start_date DATE NOT NULL,
            end_date DATE,
            next_occurrence DATE NOT NULL,
            is_active BOOLEAN DEFAULT TRUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id),
            FOREIGN KEY (wallet_id) REFERENCES wallets(id),
            FOREIGN KEY (category_id) REFERENCES categories(id)
        )`, (err, result) => {
            if (err) {
                console.error('Error creating frequent_transactions table:', err)
                return reject(err)
            } else {
                console.log('Frequent_transactions table created or already exists.')
                return resolve(result)
            }
        })
    })
}

module.exports = {run}