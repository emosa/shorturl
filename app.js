var express = require('express'); //this will require and instantiate express
var app = express();

//route for index.html
app.get('/', function(req, res){

});

//this the route that will create & return the shorten url
app.post('/api/shorten', function(req, res){

});

//Route redirect
app.get('/:encoded_id', function(req, res){

});

var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
});
