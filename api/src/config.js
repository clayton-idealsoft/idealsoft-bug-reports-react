var config = {};

config.db = {};

config.db.url = process.env.DB_URL || 'https://localhost:8081';
config.db.apikey = process.env.DB_APIKEY;
module.exports = config;