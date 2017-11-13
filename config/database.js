const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('./config.json')[env];

const DB = new Sequelize(config.database, config.username, config.password, {
    host: 'localhost',
    dialect: config.dialect,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    storage: config.storage,
    operatorsAliases: false
});

module.exports = DB;
