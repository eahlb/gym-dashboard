const schema = require('./schema');
const Workout = schema.workout;
const Program = schema.program;

const saveProgram = (program) => {
    const p = new Program(program);
    return p.save();
}

const findProgram = (params) => {
    return Program.findById(params.programId);
}

const findWorkout = (params) => {
    return Program
        .findOne({
            _id: params.programId,
            'workouts._id': params.workoutId,
        })
        .lean()
        .map((program) => {
            const data = program.workouts
                .filter((workout) => workout._id == params.workoutId)
                .pop()
            // Add input parameters to data.
            data.input = program.input;
            return data;
        });
}

const listPrograms = (params) => {
    return Program.find(params);
}

const listWorkouts = (params) => {
    return Program.findById(params.programId)
        .map((program) => program.workouts);
}

module.exports = {
    saveProgram,
    findProgram,
    findWorkout,
    listPrograms,
    listWorkouts,
    // These will be removed.
    old_saveWorkout: (workout) => Workout(workout).save(),
    old_findWorkout: (id) => Workout.findOne({ _id: id }).lean(),
    old_listWorkouts: (filter = {}) => Program.find().find(filter).lean(),
    old_updateWorkout: (id, operations) => Workout.updateOne({ _id: id }, { $set: operations }),
};
