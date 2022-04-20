const config = require('config');
const winston = require('winston');
const mongoose = require('mongoose');
const { append } = require('express/lib/response');

module.exports = function() {
    const db = config.get('db');
    //console.log(db);
    mongoose.connect(db)
        .then(() => console.log(`Connected to ${db}...`)).catch(err => console.error('Could not connect to MongoDB...', err));
}