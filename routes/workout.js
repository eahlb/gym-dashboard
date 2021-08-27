const express = require('express');
const router = express.Router();
const repo = require('../lib/workoutRepository');
const base = '/workout';

router.post(base, function (req, res) {
    repo.saveWorkout(req.body)
        .then((value) =>
            res.status(201)
                .location(value._id)
                .json(value))
        .catch((reason) => res.status(500).json(reason));
});

router.get(base, function (req, res) {
    repo.findWorkouts()
        .then((value) => res.json(value))
        .catch((reason) => res.status(500).json(reason));
});

router.get(`${base}/:id`, function (req, res) {
    repo.findWorkout(req.params.id)
        .then((value) => res.json(value))
        .catch((reason) => res.status(500).json(reason));
})

router.put(`${base}/:id`, function (req, res) {
    repo.updateWorkout(req.params.id, req.body)
        .then((value) => res.json(value))
        .catch((reason) => res.status(500).json(reason));
});

module.exports = router;