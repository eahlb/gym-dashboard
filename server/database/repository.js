const schema = require('./schema');
const Program = schema.program;
const Result = schema.result;

const saveProgram = (program) => {
    const p = new Program(program);
    return p.save();
}

const saveResult = (result) => {
    const r = new Result(result);
    return r.save();
};

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

const listResults = (params) => {
    return Result.find(params);
}

const updateWorkout = (workoutId, operations) => {
    return Program.findOne({ 'workouts._id': workoutId })
        .then(program => {
            program.workouts
                .filter(w => String(w._id) == workoutId)
                .forEach(operations);
            program.save();
        })
}

module.exports = {
    saveProgram,
    saveResult,
    findProgram,
    findWorkout,
    listPrograms,
    listWorkouts,
    listResults,
    updateWorkout,
};
