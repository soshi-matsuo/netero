const mongoose = require('../database');

const achievementSchema = new mongoose.Schema({
    trainingId: String,
    date: Date
});

module.exports = mongoose.model('Achievement', achievementSchema);
