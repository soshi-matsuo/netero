const mongoose = require('../database');

const achievementSchema = new mongoose.Schema({
    trainingId: String,
    date: String
});

module.exports = mongoose.model('Achievement', achievementSchema);
