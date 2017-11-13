const Sequelize = require('sequelize');
const DB = require('../config/database');

// Posts model
const Posts = DB.define('posts', {
    title: Sequelize.STRING,
    slug: Sequelize.STRING,
    content: Sequelize.STRING
}, {
    timestamps: false
});

module.exports = Posts;
