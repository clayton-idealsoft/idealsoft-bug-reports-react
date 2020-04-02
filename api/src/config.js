var config = {};

config.db = {};

config.db.url = process.env.DB_URL || 'https://localhost:8081';

module.exports = config;