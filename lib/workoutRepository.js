const Workout = require('../models/workout');

const workoutRepository = function () {
    const saveWorkout = function (workout) {
        const w = new Workout(workout);
        return w.save();
    };

    return {
        saveWorkout: saveWorkout
    }
}();

module.exports = workoutRepository;