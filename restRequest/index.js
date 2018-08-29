'use strict'
const express = require('express');
const app = express();
const routes = require('./api').default

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/api', routes);
app.get('/api', function(req, res){
  console.log('GET Request');
  res.send({name : 'rupesh'});
});
const port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('listening on port ' + port + '!');
 });