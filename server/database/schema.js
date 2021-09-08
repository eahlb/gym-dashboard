const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema({
    workout: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Workout',
    },
    output: {
        type: Number
    },
});

const setSchema = new Schema({
    reps: {
        type: String,
        required: true,
    },
    load: {
        type: String,
        required: true,
    },
});

const excerciseSchema = new Schema({
    excerciseName: {
        type: String,
        required: true,
    },
    sets: [setSchema],
});

const ruleSchema = new Schema({
    for: {
        type: String,
        required: true,
    },
    increase: {
        type: String,
        required: true,
    },
    value: Number,
})

const outputSchema = new Schema({
    desc: {
        type: String,
        required: true,
    },
    rules: [ruleSchema],
});

const workoutSchema = new Schema({
    workoutName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'PENDING',
        enum: ['PENDING', 'COMPLETED'],
    },
    output: outputSchema,
    excercises: [excerciseSchema],
});

const parameterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});

const programSchema = new Schema({
    programName: {
        type: String,
        required: true,
    },
    parameters: [parameterSchema],
    workouts: [workoutSchema],
});

workoutSchema.pre('updateOne', (next) => {
    this.options.runValidators = true;
    next();
});

module.exports = {
    workout: mongoose.model('Workout', workoutSchema),
    program: mongoose.model('Program', programSchema),
    result: mongoose.model('Result', resultSchema),
};
