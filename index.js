const server = require('./server')();
const config = require('./config/config.json');

// TODO: Move config
config.env = 'development'
config.port = '3000'

server.create(config);
server.start();