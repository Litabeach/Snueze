const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sleep"
);


// const surveySchema = new Schema({
//   date: { type: Date, default: Date.now },
//   hoursslept: { type: Number, required: true },
//   bedtime: { type: String, required: true },
//   sleepquality: { type: String, required: true },
//   mood: { type: String, required: true },
//   notes: { type: String, required: false },
//   user: {
//     type: Schema.Types.ObjectId,
//     ref: "User"
// }

// sleep quality = 1)I was up all night 2) I tossed and turned 3) I wokeup a couple of times 4) I got a decent night's sleep 5) I slept like a baby.

// mood = 1)I feel lousy. 2) I'm not in the best mood. 3) I just feel okay. 4) I feel pretty good 5) I feel great.

const surveySeed = [
  {
    date: new Date(Date.now()),
    hoursslept: 11,
    bedtime: "22:20",
    sleepquality: "I wokeup a couple of times",
    mood: "I feel great",
    notes: "I ate a burrito for dinner",
    user: 1
  },
  {
    date: new Date(Date.now()),
    hoursslept: 9,
    bedtime: "13:32",
    sleepquality: "I wokeup a couple of times",
    mood: "I just feel okay",
    notes: "I worked out for an hour today.",
    user: 1
  },
  {
    date: new Date(Date.now()),
    hoursslept: 4,
    bedtime: "02:02",
    sleepquality: "I tossed and turned",
    mood: "I'm not in the best mood",
    notes: "I worked out for an hour today",
    user: 1
  },
  {
    date: new Date(Date.now()),
    hoursslept: 4,
    bedtime: "03:02",
    sleepquality: "I tossed and turned",
    mood: "I'm not in the best mood",
    notes: "I had a work party today.",
    user: 1
  },
  {
    date: new Date(Date.now()),
    hoursslept: 12,
    bedtime: "22:02",
    sleepquality: "I slept like a baby",
    mood: "I feel great",
    notes: "I had the day off.",
    user: 1
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

  const journalSeed = [
    {
      title: "The Great Chase",
      body: "I was being chased by this great dane and I could barely move. My feet felt like they were covered in cement, and when I looked down I realized I was covered in pieces of bologna.",
      date: new Date(Date.now()),
      user: 1
    },
    {
      title: "OH NO!",
      body: "I logged in to class as usual to find my group already in the middle of our final presentation. I had absolutely no idea what to say when it was my turn so I just froze!",
      date: new Date(Date.now()),
      user: 1
    },
    {
      title: "Flying",
      body: "Last night I dreamed that I could fly! Not super high though, I could just kind of float about 6 feet off the ground so I had to dodge people's heads and lift my feet up so I didn't accidentally kick them.",
      date: new Date(Date.now()),
      user: 1
    },
    {
      title: "",
      body: "",
      date: new Date(Date.now()),
      user: 1
    },
  ];
  
  db.Journal
    .remove({})
    .then(() => db.Journal.collection.insertMany(journalSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
