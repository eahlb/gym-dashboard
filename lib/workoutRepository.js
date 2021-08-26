const Workout = require('../models/workout');
const mongoose = require('mongoose');

const workoutRepository = function () {
    const saveWorkout = function (workout) {
        const w = new Workout(workout);
        return w.save();
    };

    const findWorkout = function (id) {
        return Workout.findOne({ _id: id }).lean();
    }

    const findWorkouts = function (filter = {}) {
        return Workout.find(filter).lean();
    }

    return {
        saveWorkout: saveWorkout,
        findWorkout: findWorkout,
        findWorkouts: findWorkouts,
    }
}();

module.exports = workoutRepository;
