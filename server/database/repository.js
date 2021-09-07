const schema = require('./schema');
const Workout = schema.workout;
const Program = schema.program;

const saveProgram = (program) => {
    const p = new Program(program);
    return p.save();
}

const findProgram = (id) => {
    return Program.findOne({ _id: id });
}

const listPrograms = (filter = {}) => {
    return Program.find(filter).lean();
}

const listWorkouts = (programId) => {
    return Program.findOne({ _id: programId }).select('workouts');
}

module.exports = {
    saveProgram: saveProgram,
    findProgram: findProgram,
    listPrograms: listPrograms,
    listWorkouts,
    // These will be removed.
    old_saveWorkout: (workout) => Workout(workout).save(),
    old_findWorkout: (id) => Workout.findOne({ _id: id }).lean(),
    old_listWorkouts: (filter = {}) => Program.find().find(filter).lean(),
    old_updateWorkout: (id, operations) => Workout.updateOne({ _id: id }, { $set: operations }),
};
