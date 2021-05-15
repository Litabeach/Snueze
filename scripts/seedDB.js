const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/sleep"
);

// const surveySchema = new Schema({
//   date: { type: Date, default: Date.now },
//   bedtime: { type: Number, required: true },
//   wakeuptime: { type: Number, required: true },
//   sleepquality: { type: String, required: true },
//   mood: { type: String, required: true },
  
// });

const surveySeed = [
  {
    date:  new Date(Date.now()),
    bedtime: "10:22pm",
    wakeuptime: "9:00am",
    sleepquality: "good",
    mood: "good"
  },
  {
    date:  new Date(Date.now()),
    bedtime: "11:32pm",
    wakeuptime: "8:00am",
    sleepquality: "bad",
    mood: "bad"
  },
  {
    date:  new Date(Date.now()),
    bedtime: "11:32pm",
    wakeuptime: "8:00am",
    sleepquality: "okay",
    mood: "okay"
  }
];

db.Survey
  .remove({})
  .then(() => db.Survey.collection.insertMany(surveySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
