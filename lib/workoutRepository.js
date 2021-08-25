const Workout = require('../models/workout');

const workoutRepository = function () {
    const saveWorkout = function (workout) {
        const w = new Workout(workout);
        return w.save();
    };

    const findWorkout = function (param) {
        return Workout.find(param).lean();
    }

    return {
        saveWorkout: saveWorkout,
        findWorkout: findWorkout,
    }
}();

module.exports = workoutRepository;
