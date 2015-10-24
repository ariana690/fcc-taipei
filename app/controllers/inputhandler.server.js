'use strict';

function inputHandler (db) {

    var posts = db.collection('posts');

    this.getPosts = function (req, res) {

        var projection = { '_id': false };
        
        posts.find({}, projection).toArray( function (err, result) {
            if (err) { throw err; }
            
            
            if (result) {
               
                res.send(result);
                
            } else {
                //need to fix this. Inserting of new collection when results don't
                //return one is broken because of .toArray
                console.log("No collection found. Inserting collection.");
                posts.insert({}, function (err) {
                    if (err) { throw err; }
                    
                    posts.find({}, projection).toArray( function (err, result) {
                        if (err) { throw err; }
                        res.send(result);
                    
                    });
                });
            }
        });
    };
    
    
    this.post = function(req, res){
        req.on('data', function(data) {
            console.log(data);
            var record = {};
            record.body = data;
            posts.insert(record);
        }).setEncoding("utf8");
        
        req.on('end', function() {
           res.writeHead(200);
           res.end();
        });
    };
}

module.exports = inputHandler;