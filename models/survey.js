const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema({
  date: { type: Date, default: Date.now },
  hoursslept: { type: Number, required: true },

  bedtime: { type: String, required: true },

  //wakeuptime: { type: String, required: true },
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
