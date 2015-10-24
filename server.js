'use strict';

var express = require('express'),
    routes = require('./app/routes/index.js'),
    mongo = require('mongodb');

var app = express();

mongo.connect('mongodb://localhost:27017/fcc-taipei', function(err, db){
    
    if (err) {
        throw new Error('Database failed to connect!');
    } else {
        console.log('MongoDB successfully connected on port 27017');
    }

    //makes /public a shortcut to the public directory
    app.use('/public', express.static(process.cwd() + '/public'));
    app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
    
    routes(app, db);

    app.listen(process.env.PORT, function() {
    //app.listen(3000, function() {  //port changed for Cloud 9
        console.log('Listening on port ' + process.env.PORT + '...');
    
    });
    
});