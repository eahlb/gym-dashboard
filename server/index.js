const express = require('express');
const http = require('http');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

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

        // Open database connection.
        const db = require('./database');
        db.open(config.database);

        // Add routing.
        const routes = require('./routes');
        routes.init(app);

        // Create documentation UI.
        const swaggerUi = require('swagger-ui-express')
        const swaggerFile = require('./swagger-output.json')
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