const express = require('express');
const router = express.Router();
const repo = require('../lib/workoutRepository');

/* GET pages. */
router.get('/', function (req, res) {
  repo.findWorkouts({ status: 'PENDING' })
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

module.exports = router;
