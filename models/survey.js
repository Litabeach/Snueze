const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
  date: { type: Date, required: true, index: { unique: true }},
  hoursslept: { type: Number, required: true },
  sleepquality: { type: String, required: true },
  mood: { type: String, required: true },
  notes: { type: String, required: false },
  bedtime: { type: String, required: true },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
}

});

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
