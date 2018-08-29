const express = require('express');
const router = express.Router();

router.get('/persons', (req, res) => {
    res.send({type: 'GET'});
});

router.post('/persons', (req, res) => {
  res.send({
    name : req.body.name,
    eyeColor : req.body.eyeColor,
    type: 'POST'
  });
});

router.put('/persons/:id', (req, res) => {
    res.send({type: 'PUT'});
});

router.delete('/persons/:id', (req, res) => {
    res.send({type: 'DELETE'});
});

module.exports = router;