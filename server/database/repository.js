const schema = require('./schema');
const Workout = schema.workout;
const Program = schema.program;

const saveProgram = (program) => {
    const p = new Program(program);
    return p.save();
}

const findProgram = (id) => {
    return Program.findOne({ _id: id }).lean();
}

const listPrograms = (filter = {}) => {
    return Program.find(filter).lean();
}

const saveWorkout = (workout) => {
    const w = new Workout(workout)
    return w.save();
}

const findWorkout = (id) => {
    return Workout.findOne({ _id: id }).lean();
}

const listWorkouts = (filter = {}) => {
    return Program.find().find(filter).lean();
}

const updateWorkout = (id, operations) => {
    return Workout.updateOne({ _id: id }, { $set: operations });
}

module.exports = {
    saveProgram: saveProgram,
    findProgram: findProgram,
    listPrograms: listPrograms,
    saveWorkout: saveWorkout,
    findWorkout: findWorkout,
    listWorkouts: listWorkouts,
    updateWorkout: updateWorkout,
};
