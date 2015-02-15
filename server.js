/*eslint new-cap:0 */
'use strict';
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var app = express();
var http = require('http').Server(app);
var mongoose = require('mongoose');

var options = {
    port: process.env.VCAP_APP_PORT || 3000,
    mongo: process.env.MONGO || 'mongodb://localhost/yow-hackathon'
};

if(process.env.VCAP_SERVICES){
    var svcs = JSON.parse(process.env.VCAP_SERVICES);
    options.mongo = svcs['mongodb-2.2'][0].credentials.url;
}

var Attendee = mongoose.model('Attendee', {
    mail: {type: String, unique: true},
    first_name: String,
    last_name: String,
    is_attending: Boolean,
    pizza: String
});

function demongify(doc) {
    doc = doc.toObject();
    delete doc._id;
    delete doc.__v;
    return doc;
}

mongoose.connect(options.mongo);

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));
app.use(errorHandler({ dumpExceptions: true, showStack: true }));

app.get('/api/attendees', function(req, res) {
    Attendee.find(function(err, attendees) {
        if(!err) {
            return res.send(attendees.map(demongify));
        } else {
            return console.error(err);
        }
    });
});

app.post('/api/attendees', function (req, res) {
    Attendee.findOneAndUpdate({mail: req.body.mail}, {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        is_attending: req.body.is_attending,
        pizza: req.body.pizza
    }, function(err, attendee) {
        if(err) {
            return console.error(err);
        } else {
            return res.send(demongify(attendee));
        }
    });
});

app.get('/api/attendees/:mail', function (req, res){
    return Attendee.findOne({ mail: req.params.mail}, function (err, attendee) {
        if (!err) {
            return res.send(demongify(attendee));
        } else {
          return console.log(err);
        }
    });
});

http.listen(options.port);
