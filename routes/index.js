const express = require('express');
const router = express.Router();
const repo = require('../lib/workoutRepository');

/* GET pages. */
router.get('/', function (req, res) {
  repo.findWorkouts()
    .then((value) => res.render('index', { title: 'Dashboard', workouts: value }));
});

router.get('/timer', function (req, res) {
  res.render('timer', { title: 'Timer' });
});

router.get('/view-workout/:id', function (req, res) {
  repo.findWorkout(req.params.id)
    .then((value) => res.render('workout', { data: value }))
    .catch((reason) => res.render('error', { error: reason }));
});

/* WORKOUT */
router.post('/workout', function (req, res) {
  repo.saveWorkout(req.body)
    .then((value) => res.send(value))
    .catch((reason) => res.status(500).json(reason));
});

router.get('/workout', function (req, res) {
  repo.findWorkouts()
    .then((value) => res.send(value))
    .catch((reason) => res.status(500).json(reason));
});

router.get('/workout/:id', function (req, res) {
  repo.findWorkout(req.params.id)
    .then((value) => res.send(value))
    .catch((reason) => res.status(500).json(reason));
})

router.put('/workout/:id', function (req, res) {
  repo.updateWorkout(req.params.id, req.body)
    .then((value) => res.send(value))
    .catch((reason) => res.status(500).json(reason));
});

module.exports = router;
