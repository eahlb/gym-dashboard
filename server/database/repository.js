const schema = require('./schema');
const Workout = schema.workout;
const Program = schema.program;

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

const saveProgram = (program) => {
    const p = new Program(program);
    return p.save();
}

module.exports = {
    saveWorkout: saveWorkout,
    findWorkout: findWorkout,
    findWorkouts: findWorkouts,
    updateWorkout: updateWorkout,
    saveProgram: saveProgram,
};
