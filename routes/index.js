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

router.get('/create', function (req, res) {
  res.render('create', { title: 'Create Workout' });
});

/* WORKOUT */
router.post('/workout', function (req, res) {
  repo.saveWorkout(req.body)
    .then((value) => res.send(value))
    .catch((reason) => res.status(500).json({ error: reason }));
});

router.get('/workout', function (req, res) {
  // TODO: get all workouts
  res.send('OK GET')
});

router.get('/workout/:name', function (req, res) {
  // TODO: get workouts by name
  res.send('OK GET')
})

module.exports = router;
