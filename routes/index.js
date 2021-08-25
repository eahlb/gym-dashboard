const express = require('express');
const router = express.Router();
const repo = require('../lib/workoutRepository');

/* GET pages. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Dashboard' });
});

router.get('/timer', function (req, res) {
  res.render('timer', { title: 'Timer' });
});

/* WORKOUT */
router.post('/workout', function (req, res) {
  repo.saveWorkout(req.body)
    .then((value) => res.send(value))
    .catch((reason) => res.status(500).json(reason));
});

router.get('/workout', function (req, res) {
  repo.findWorkout({})
    .then((value) => res.send(value))
    .catch((reason) => res.status(500).json(reason));
});

router.get('/workout/:id', function (req, res) {
  repo.findWorkout({ _id: req.params.id })
    .then((value) => res.send(value))
    .catch((reason) => res.status(500).json(reason));
})

module.exports = router;
