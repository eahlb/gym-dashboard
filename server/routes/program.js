const express = require('express');
const router = express.Router();
const repo = require('../database/repository');

router.post('/program', (req, res) => {
    /*
        #swagger.tags = ['Program']
        #swagger.description = "Create a chain of workouts."
        #swagger.parameters['Data'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/program" }
        }
    */
    repo.saveProgram(req.body)
        .then((value) =>
            res.status(201)
                .location(value._id)
                .json(value))
        .catch((reason) => res.status(500).json(reason));
});

router.get('/program', (req, res) => {
    /*
        #swagger.tags = ['Program']
        #swagger.description = "Get all programs."
    */
    repo.listPrograms()
        .then((value) => res.status(200).json(value))
        .catch((reason) => res.status(500).json(reason));
})

module.exports = router;