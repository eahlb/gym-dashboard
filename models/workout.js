const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const setSchema = new Schema({
    reps: { type: Number, required: true },
    load: { type: String, required: true },
    time: { type: Number, required: true },
});

const excerciseSchema = new Schema({
    name: { type: String, required: true },
    sets: [setSchema],
});

const workoutSchema = new Schema({
    name: { type: String, required: true },
    excercises: [excerciseSchema],
});

module.exports = mongoose.model('Workout', workoutSchema);
