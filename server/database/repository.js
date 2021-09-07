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

const listWorkouts = (filter = {}) => {
    return Workout.find(filter).lean();
}

const updateWorkout = (id, operations) => {
    return Workout.updateOne({ _id: id }, { $set: operations });
}

const saveProgram = (program) => {
    const p = new Program(program);
    return p.save();
}

const listPrograms = (filter = {}) => {
    return Program.find(filter).lean();
}

module.exports = {
    saveWorkout: saveWorkout,
    findWorkout: findWorkout,
    listWorkouts: listWorkouts,
    updateWorkout: updateWorkout,
    saveProgram: saveProgram,
    listPrograms: listPrograms,
};
