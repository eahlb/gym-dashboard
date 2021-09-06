const workoutRoutes = require('./workout');
const processRoutes = require('./process')

const init = function (app) {
  app.use('/api', workoutRoutes);
  app.use('/api', processRoutes);
}

module.exports = {
  init: init,
}