const express = require('express');
const router = express.Router();
const Posts = require('../models/posts');
const Services = require('../models/services');
const Contacts = require('../models/contacts');

// GET home page
router.get('/', function (req, res, next) {
    Posts.findAll({
        attributes: ['title', 'slug']
    }).then(posts => {
        res.render('home', {
            posts: posts.map(post => post.dataValues)
        });
    });
});

// GET the correct post
router.get('/posts/:post', function (req, res, next) {
    Posts.findOne({
        attributes: ['title', 'slug', 'content'],
        where: {
            slug: req.params.post
        }
    }).then(post => {
        res.render('post', { post: post });
    });
});

// GET services listing
router.get('/services', function (req, res, next) {
    Services.findAll({
        attributes: ['title', 'description']
    }).then(services => {
        res.render('services', {
            title: 'Services',
            services: services.map(service => service.dataValues)
        });
    });
});

// GET contacts listing
router.get('/contacts', function (req, res, next) {
    Contacts.findAll({
        attributes: ['name', 'position', 'blurb']
    }).then(contacts => {
        res.render('contacts', {
            title: 'Contacts',
            contacts: contacts
        });
    });
});

module.exports = router;
