const express = require('express');
const router = express.Router();
const repo = require('../lib/workoutRepository');

/* GET pages. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Dashboard' });
});

router.get('/timer', function (req, res, next) {
  res.render('timer', { title: 'Timer' });
});

router.get('/create', function (req, res, next) {
  res.render('create', { title: 'Create Workout' });
});

/* WORKOUT */
router.post('/workout', function (req, res, next) {
  repo.saveWorkout(req.body);
  res.redirect('/')
});

module.exports = router;
