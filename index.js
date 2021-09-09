const server = require('./server')();
const config = require('./config/node-config.json');

server.create(config);
server.start();