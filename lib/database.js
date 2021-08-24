'use strict';
var mongoose = require('mongoose');

var database = function () {
    var connection = null,

        init = function (config) {
            console.log('Connecting to MongoDB database');
            var options = {
                promiseLibrary: global.Promise,
                useNewUrlParser: true,
                useUnifiedTopology: true
            };

            var connString = `${config.protocol}://${config.credentials}@${config.host}`;
            mongoose.connect(connString, options);
            connection = mongoose.connection;
            connection.on('error', console.error.bind(console, 'connection error:'));
            connection.once('open', function () {
                console.log('MongoDB connection open');
            });
            return connection;
        },

        close = function () {
            if (connection) {
                connection.close(function () {
                    console.log('MongoDB connection closed');
                    process.exit(0);
                });
            }
        }

    return {
        init: init,
        close: close
    };

}();

module.exports = database;