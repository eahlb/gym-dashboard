const server = require('./server')();
const config = require('./config/config.json');

server.create(config);
server.start();