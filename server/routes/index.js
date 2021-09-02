const workoutRoutes = require('./workout');

const init = function (app) {
  app.use('/api/workout', workoutRoutes);
}

module.exports = {
  init: init,
}