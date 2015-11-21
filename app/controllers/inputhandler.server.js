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
/*
    this.removePost = function(req, res){
       req.on('data', function(data) {
            data = JSON.parse(data);
            console.log(data);
            //posts.remove(data);
        }).setEncoding("utf8");
        
        req.on('end', function() {
           res.writeHead(200);
           res.end();
        });
    };
}
*/

    this.removePost = function(req, res) {
        req.on('data', function(data) {
         //var data = JSON.parse(data);
         /*
         //ADD FUNCTIONALITY TO DELETE POSTS by ObjectID
        

        var deleteString = {};
//        var  hello_obj = {"_id" : ObjectId("565013def1db83325fc13c98") } ;
        deleteString._id = ObjectID("565013def1db83325fc13c98");
console.log( "1" + hello_obj._id ) ;
//console.log(pe "2" + ty
        //deleteString._id = ObjectID(data.id);
        //leteString._id = 'ObjectId("' + JSON.parse(data)._id + '")';        
       // deleteString._id = JSON.parse(data)._id;
        //console.log(JSON.parse(data.id));
        //console.log(JSON.parse(data).id);
           // posts.remove({_id: OjectId(deleteString)});
posts.remove( hello_obj ) ;
            console.log(typeof deleteString);
            console.log(deleteString);
            console.log("Delete Called"); */
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
            console.log(JSON.stringify(record));
            posts.insert(record);
        }).setEncoding("utf8");
        
        req.on('end', function() {
           res.writeHead(200);
           res.end();
        });
    };
}

module.exports = inputHandler;
