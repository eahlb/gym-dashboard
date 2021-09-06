const workoutRoutes = require('./workout');
const programRoutes = require('./program')

const init = function (app) {
  app.use('/api', workoutRoutes);
  app.use('/api', programRoutes);
}

module.exports = {
  init: init,
}