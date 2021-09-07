const express = require('express');
const router = express.Router();
const repo = require('../database/repository');

router.get('/', function (req, res) {
  repo.listPrograms()
    .then((value) => res.render('index', { title: 'Dashboard', programs: value }));
});

router.get('/timer', function (req, res) {
  res.render('timer', { title: 'Timer' });
});

router.get('/workout/:id', function (req, res) {
  repo.findWorkout(req.params.id)
    .then((value) => res.render('workout', { data: value }))
    .catch((reason) => res.render('error', { error: reason }));
});

router.get('/program/:programId/workout/:workoutId', function (req, res) {
  repo.findWorkout(req.params)
    .then((value) => res.render('workout', { data: value }))
    .catch((reason) => res.render('error', { error: reason }));
});

// POST instead of PUT due to html specification restrictions.
router.post('/update-workout/:id', function (req, res) {
  repo.updateWorkout(req.params.id, req.body)
    .then(() => res.redirect('/'))
    .catch((reason) => res.render('error', { error: reason }));
})

module.exports = router;
