'use strict'
const express = require('express');
const app = express();
const routes = require('./api');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/personGet');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api', routes);
app.use(function(err, req, res, next){
  res.status(422).send({error: err.message});
});
app.get('/api', function(req, res){
  console.log('GET Request');
  res.send({name : 'rupesh'});
});
const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('listening on port ' + port + '!');
 });