/*eslint new-cap:0 */
'use strict';
var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var mongoose = require('mongoose-q')();

var options = {
    port: process.env.VCAP_APP_PORT || 3000,
    mongoUrl: process.env.MONGO_URL || 'mongodb://localhost/yow-hackathon'
};

mongoose.connect(options.mongoUrl);
app.use(express.static(path.join(__dirname, '/public')));

http.listen(options.port);
