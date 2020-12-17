const mongoose = require('../database');

const trainingSchema = new mongoose.Schema({
    id: Number,
    name: String,
    velocity: Number,
    unit: String
});

module.exports = mongoose.model('Training', trainingSchema);
