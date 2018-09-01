const express = require('express');
const router = express.Router();
const person = require('../models/personsData.js');

router.get('/persons', (req, res, next) => {
    res.send({type: 'GET'});
});

router.post('/persons', (req, res, next) => {
  person.create(req.body).then(function (personLearn){
    res.send(personLearn);
  }).catch(next);
  // let personLearn = new person(req.body);
  // personLearn.save();
});

router.put('/persons/:id', (req, res, next) => {
  person.findByIdAndUpdate({_id: req.params.id})
  // res.send({type: 'PUT'});
});

router.delete('/persons/:id', (req, res, next) => {
  person.findByIdAndRemove({_id: req.params.id}).then(function (personLearn){
    res.send(personLearn);
  })
  // console.log(req.params.id)
  // res.send({type: 'DELETE'});
});

module.exports = router;