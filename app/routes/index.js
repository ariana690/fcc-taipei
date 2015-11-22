'use strict';

var InputHandler = require(process.cwd() + '/app/controllers/inputhandler.server.js');

module.exports = function(app, db) {
  
  var inputHandler = new InputHandler(db);
  
  app.route('/').get(function(req, res) {
      //console.log("connection on '/'");
      res.sendFile(process.cwd() + '/public/index.html');
      
  });
  
  //refactor
  app.route('/api/posts')
            .get(inputHandler.getPosts)
            .post(inputHandler.post)
            .delete(inputHandler.removePost)
            .put(inputHandler.editPost);
  
    
    
};
