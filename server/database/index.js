const mongoose = require('mongoose');

const database = function () {
    let connection = null;

    const open = function (config) {
        console.log('Connecting to MongoDB database');
        const options = {
            promiseLibrary: global.Promise,
            useNewUrlParser: true,
            useUnifiedTopology: true
        };

        const connString = `${config.protocol}://${config.credentials}@${config.host}`;
        mongoose.connect(connString, options);
        connection = mongoose.connection;
        connection.on('error', console.error.bind(console, 'connection error:'));
        connection.once('open', function () {
            console.log('MongoDB connection open');
        });
        return connection;
    };

    const close = function () {
        if (connection) {
            connection.close(function () {
                console.log('MongoDB connection closed');
                process.exit(0);
            });
        }
    }

    return {
        open: open,
        close: close
    };

}();

module.exports = database;