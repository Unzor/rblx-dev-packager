var express = require('express');
var app = express();
app.use(express.json());
app.get('/', function(req, res){
res.send('yes');
});
app.post('/api/add', function(req, res){
    var fs = require('fs');
    var game_buffer=fs.readFileSync(req.body.path);
 app.get('/games/' + req.body.name, function(req, res){
 res.send(game_buffer);
 });
 res.send({success: true, url: '/games/' + req.body.name});
});
app.listen(5050, function(){
    console.log('App listening!');
});