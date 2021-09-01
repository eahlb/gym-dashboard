const express = require('express');
const router = express.Router();
const repo = require('../lib/workoutRepository');
const base = '/workout';

router.post(base, function (req, res) {
    /*
        #swagger.tags = ['Workout']
        #swagger.description = "Create a new workout"
        #swagger.parameters['New workout'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/workout" }
        }
    */
    repo.saveWorkout(req.body)
        .then((value) =>
            res.status(201)
                .location(value._id)
                .json(value))
        .catch((reason) => res.status(500).json(reason));
});

router.get(base, function (req, res) {
    /*
        #swagger.tags = ['Workout']
        #swagger.description = "Get all workouts"
    */
    repo.findWorkouts()
        .then((value) => res.status(200).json(value))
        .catch((reason) => res.status(500).json(reason));
});

router.get(`${base}/:id`, function (req, res) {
    /*
        #swagger.tags = ['Workout']
        #swagger.description = "Get a workout"
    */
    // TODO: Add 404 code.
    repo.findWorkout(req.params.id)
        .then((value) => res.status(200).json(value))
        .catch((reason) => res.status(500).json(reason));
})

router.put(`${base}/:id`, function (req, res) {
    /*
        #swagger.tags = ['Workout']
        #swagger.description = "Update a workout"
        #swagger.parameters['Updated workout'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/workout" }
        }
    */
    // TODO: Add 404 code.
    repo.updateWorkout(req.params.id, req.body)
        .then((value) => res.status(200).json(value))
        .catch((reason) => res.status(500).json(reason));
});

module.exports = router;