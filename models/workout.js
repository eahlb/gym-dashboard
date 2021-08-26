const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setSchema = new Schema({
    reps: { type: String, required: true },
    load: { type: String, required: true },
    time: { type: Number, required: true },
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

module.exports = mongoose.model('Workout', workoutSchema);
