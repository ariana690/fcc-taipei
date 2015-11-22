'use strict';

var ObjectID = require('mongodb').ObjectID;


function inputHandler (db) {

    var posts = db.collection('posts');

    this.getPosts = function (req, res) {

        //var projection = { '_id': false };
        var projection = 

        posts.find({}, projection).toArray( function (err, result) {
            if (err) { throw err; }
            
            
            if (result) {
               console.log(typeof result[0]._id);
                res.send(result);
                
            } else {
                //need to fix this. Inserting of new collection when results don't
                //return one is broken because of .toArray
                console.log("No collection found. Inserting collection.");
                posts.insert({}, function (err) {
                    if (err) { throw err; }
                        //below line uses a projection, right now we're just returning everything in the table. 
                    //posts.find({}, projection).toArray( function (err, result) {
                    posts.find({}).toArray( function (err, result) {
                        if (err) { throw err; }
                    console.log(typeof result[0]._id);
                        res.send(result);
                    
                    });
                });
            }
        });
    };
    
   this.editPost = function(req, res) {
        req.on('data', function(data) {
        var data = JSON.parse(data);
        console.log("Updating record: " + data.id);
        var id = new ObjectID(data.id);
        console.log(id);

        if (data.body != undefined) {
                posts.update({_id : id}, { $set : { body : data.body } });        
        }

        if (data.title != undefined) {
                posts.update({_id : id}, { $set : { title : data.title } });        
        }
        
        }).setEncoding("utf8");
                

        req.on('end', function() {
           res.writeHead(200);
           res.end();
        });

        
}

    this.removePost = function(req, res) {
        req.on('data', function(data) {
        var data = JSON.parse(data);
        console.log("Deleting record: " + data.id);
        var id = new ObjectID(data.id);
        posts.remove({_id: id});
        console.log("Deleted record: " + id);
        }).setEncoding("utf8");
                

        req.on('end', function() {
           res.writeHead(200);
           res.end();
        });

        
}
    

    this.post = function(req, res){
        req.on('data', function(data) {
            //console.log(data);
            //console.log(JSON.stringify(data.body));
            var record = {};
            var data = JSON.parse(data);
            record.body = data.body;
            record.title = data.title;
            record.date = new Date();
            posts.insert(record);
        }).setEncoding("utf8");
        
        req.on('end', function() {
           res.writeHead(200);
           res.end();
        });
    };
}

module.exports = inputHandler;
