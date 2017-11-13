const Sequelize = require('sequelize');
const DB = require('../config/database');

// Services model
const Services = DB.define('services', {
    name: Sequelize.STRING,
    blurb: Sequelize.STRING,
    position: Sequelize.STRING
}, {
    timestamps: false
});

module.exports = Services;
