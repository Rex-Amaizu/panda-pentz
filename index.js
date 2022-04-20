const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/routes')(app);
require('./startup/logging')();
require('./startup/validation')();
//require('./startup/config')();
require('./startup/db')();
require('./startup/prod')(app);

const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV || 'development'
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = server;