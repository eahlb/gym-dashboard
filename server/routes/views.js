const express = require('express');
const router = express.Router();
const repo = require('../database/repository');
const compute = require('../process/compute');

router.get('/', function (req, res) {
  repo.listPrograms()
    .then((value) => res.render('index', { title: 'Dashboard', programs: value }));
});

router.get('/timer', function (req, res) {
  res.render('timer', { title: 'Timer' });
});

router.get('/program/:programId/workout/:workoutId', function (req, res) {
  repo.findWorkout(req.params)
    .map(compute)
    .then((value) => res.render('workout', { data: value, programId: req.params.programId }))
    .catch((reason) => res.render('error', { error: reason }));
});

module.exports = router;
