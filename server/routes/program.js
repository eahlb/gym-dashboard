const express = require('express');
const router = express.Router();

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
    res.status(500).send({ error: 'Not implemented' });
});

router.get('/program', (req, res) => {
    /*
        #swagger.tags = ['Program']
        #swagger.description = "Get all programs."
    */
    res.status(500).send({ error: 'Not implemented' });
})

module.exports = router;