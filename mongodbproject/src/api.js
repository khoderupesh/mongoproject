const express = require('express');
const router = express.Router();
const person = require('../models/personsData.js');

router.get('/persons', (req, res, next) => {
    res.send({type: 'GET'});
});

router.post('/persons', (req, res, next) => {
  person.create(req.body).then(function(person){
    res.send(person);
  }).catch(next);
  // let personLearn = new person(req.body);
  // personLearn.save();
});

router.put('/persons/:id', (req, res, next) => {
    res.send({type: 'PUT'});
});

router.delete('/persons/:id', (req, res, next) => {
    res.send({type: 'DELETE'});
});

module.exports = router;