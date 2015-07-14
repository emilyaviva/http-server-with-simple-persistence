'use strict';

var express = require('express');
var animals = require('./lib/animals');

var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/app/'))

app.get('/quote', function(req, res) {

});

app.post('/quote', function(req, res) {

});

app.put('/quote', function(req, res) {

});

app.del('/quote', function(req, res) {

});

app.listen(port, function() {
  console.log('Server started on port ' + port);
});
