const express = require('express');
const cors=require('cors');
const nfts = require('../routes/nfts');
const error = require('../middleware/error');

module.exports = function(app) {
    app.use(express.json());
    app.use(cors());
    app.use('/api/nfts', nfts);

    app.use(error);
}