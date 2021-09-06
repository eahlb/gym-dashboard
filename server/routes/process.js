const express = require('express');
const router = express.Router();

router.post('/workout-creation', (req, res) => {
    /*
        #swagger.tags = ['Processes']
        #swagger.description = "Initiate a workout creation.
            Number of inputs must match template parameters"
        #swagger.parameters['Data'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/workoutCreation" }
        }
    */
    res.status(500).send({ error: 'Not implemented' });
});

module.exports = router;