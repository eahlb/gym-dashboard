const express = require('express');
const router = express.Router();
const repo = require('../database/repository');
const compute = require('../process/compute');

router.get('/', function (req, res) {
  repo.listPrograms()
    .then((value) => res.render('index', {
      title: 'Dashboard',
      programs: value
        .filter(p => p.workouts.find(w => w.status == 'PENDING'))
        .map(p => {
          return {
            _id: p._id,
            programName: p.programName,
            workout: p.workouts.find(w => w.status == 'PENDING'),
          }
        }),
    }));
});

router.get('/program/:programId/workout/:workoutId', function (req, res) {
  repo.findWorkout(req.params)
    .map(compute)
    .then((value) => res.render('workout', {
      data: value,
      programId: req.params.programId,
      pending: value.status == 'PENDING',
    }))
    .catch((reason) => res.render('error', { error: reason }));
});

module.exports = router;
