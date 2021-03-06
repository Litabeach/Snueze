const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sleep"
);

// sleep quality = 1)I was up all night 2) I tossed and turned 3) I wokeup a couple of times 4) I got a decent night's sleep 5) I slept like a baby.

// mood = 1)I feel lousy. 2) I'm not in the best mood. 3) I just feel okay. 4) I feel pretty good 5) I feel great.

const surveySeed = [
  {
    date: "2021-05-15",
    hoursslept: 11,
    bedtime: "22:20",
    sleepquality: "I wokeup a couple of times",
    mood: "I feel great",
    notes: "I ate a burrito for dinner",
    user: 1
  },
  {
    date: "2021-05-16",
    hoursslept: 9,
    bedtime: "13:32",
    sleepquality: "I wokeup a couple of times",
    mood: "I just feel okay",
    notes: "I worked out for an hour today.",
    user: 1
  },
  {
    date: "2021-05-17",
    hoursslept: 4,
    bedtime: "02:02",
    sleepquality: "I tossed and turned",
    mood: "I'm not in the best mood",
    notes: "I worked out for an hour today",
    user: 1
  },
  {
    date: "2021-05-18",
    hoursslept: 4,
    bedtime: "03:02",
    sleepquality: "I tossed and turned",
    mood: "I'm not in the best mood",
    notes: "I had a work party today.",
    user: 1
  },
  {
    date: "2021-05-19",
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
      title: "Dreamception",
      body: "I had a dream that I woke up from a nap and everything seemed a little off. The sky looked like it does when it's about to storm. But then my alarm went off IRL and I didn't quite trust that I wasn't still dreaming.",
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

    const userSeed = [
      {
        username: "BedHeadDeb",
        email: "debs@gmail.com",
        passwordHash: "password1234",
      },
      {
        username: "runningOnZzz",
        email: "sleeper@yahoo.com",
        passwordHash: "password1234",
      },
      {
        username: "SleeplessDreamer",
        email: "countingsheep@gmail.com",
        passwordHash: "password1234",
      },
      {
        username: "Dreameaver",
        email: "dreamweaver@aol.com",
        passwordHash: "password1234",
      },
      {
        username: "Snorezilla",
        email: "iSnore@gmail.com",
        passwordHash: "password1234",
      },
    ];
    
    db.User
      .remove({})
      .then(() => db.User.collection.insertMany(userSeed))
      .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
