const db = require('../utils/db');

const migrations = [
    require('./001_create_users'),
    require('./002_create_wallets'),
    require('./003_create_categories'),
    require('./004_create_frequent_transactions'),
    require('./005_create_transactions'),
    require('./006_create_transfers')
];

migrations.forEach(migration => {
    migration.run()
})