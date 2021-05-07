const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
  date: { type: Date, default: Date.now },
  bedtime: { type: Number, required: true },
  wakeuptime: { type: Number, required: true },
  sleepquality: { type: String, required: true },
  mood: { type: String, required: true },
  
});

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
