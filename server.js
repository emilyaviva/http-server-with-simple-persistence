'use strict';

var express = require('express');
var word = require('./lib/word');

var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/app/'))

app.get('/word', function(req, res) {

});

app.post('/word', function(req, res) {
  quote.postWord(req.body.word);
});

app.put('/word', function(req, res) {

});

app.delete('/word', function(req, res) {

});

app.listen(port, function() {
  console.log('Server started on port ' + port);
});
