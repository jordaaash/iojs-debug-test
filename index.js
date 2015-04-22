'use strict';

require('babel-core/register')();

var Server = require('./server');
var server = new Server(8080);

module.exports = server;
