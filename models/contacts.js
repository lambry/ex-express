const Sequelize = require('sequelize');
const DB = require('../config/database');

// Contacts model
const Contacts = DB.define('contacts', {
    name: Sequelize.STRING,
    blurb: Sequelize.STRING,
    position: Sequelize.STRING
}, {
    timestamps: false
});

module.exports = Contacts;
