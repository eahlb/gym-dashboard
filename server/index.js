const express = require('express');
const http = require('http');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');

module.exports = function () {
    const app = express();
    let server;

    const create = function (config) {
        // Create application.
        app.set('env', config.env);
        app.set('port', config.port);
        app.use(logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(cookieParser());

        // TODO: Fix filenames.
        const db = require('./database/database');
        db.init(config.database);

        // TODO: Move route logic to routes -> const routes = require('./routes');
        const workoutRoutes = require('./routes/workout');
        app.use('/api', workoutRoutes);

        // TODO: Move logic to documentation.
        const swaggerUi = require('swagger-ui-express')
        const swaggerFile = require('./docs/swagger_output.json')
        app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

        // Create server.
        server = http.createServer(app);
    }

    const start = function () {
        const port = app.get('port');
        server.listen(port);
    }

    return {
        create: create,
        start: start,
    }
}