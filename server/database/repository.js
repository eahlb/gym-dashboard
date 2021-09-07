const schema = require('./schema');
const Workout = schema.workout;

const saveWorkout = (workout) => {
    const w = new Workout(workout)
    return w.save();
}

const findWorkout = (id) => {
    return Workout.findOne({ _id: id }).lean();
}

const findWorkouts = (filter = {}) => {
    return Workout.find(filter).lean();
}

const updateWorkout = (id, operations) => {
    return Workout.updateOne({ _id: id }, { $set: operations });
}

module.exports = {
    saveWorkout: saveWorkout,
    findWorkout: findWorkout,
    findWorkouts: findWorkouts,
    updateWorkout: updateWorkout,
};
