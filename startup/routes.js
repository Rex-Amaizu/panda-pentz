const express = require('express');
const nfts = require('../routes/nfts');
const error = require('../middleware/error');

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/nfts', nfts);

    app.use(error);
}