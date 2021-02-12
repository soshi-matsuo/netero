const mongoose = require("../database");

const trainingSchema = new mongoose.Schema({
  id: String,
  name: String,
  velocity: Number,
  unit: String,
  userId: String
});

module.exports = mongoose.model("Training", trainingSchema);
