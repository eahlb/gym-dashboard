const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setSchema = new Schema({
    reps: { type: String, required: true },
    load: { type: String, required: true },
});

const excerciseSchema = new Schema({
    excerciseName: { type: String, required: true },
    sets: [setSchema],
});

const workoutSchema = new Schema({
    workoutName: { type: String, required: true },
    status: { type: String, required: true, enum: ['PENDING', 'COMPLETED'] },
    excercises: [excerciseSchema],
});

const inputSchema = new Schema({
    name: { type: String, required: true },
    value: { type: String, required: true },
});

const programSchema = new Schema({
    programName: { type: String, required: true },
    input: [inputSchema],
    workouts: [workoutSchema],
});

workoutSchema.pre('updateOne', (next) => {
    this.options.runValidators = true;
    next();
});

module.exports = {
    workout: mongoose.model('Workout', workoutSchema),
    program: mongoose.model('Program', programSchema),
};
