//connections for Video chat. Will find best place at a later time.
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//cookie Parser for auth to parse to cookie
app.use(cookieParser());
app.use(
  cors({
    origin: [
      'https://snueze.herokuapp.com',
      'http://localhost:3000'
    ],
    credentials: true
  })
);
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//assets for video chat routes
const config = require("./utils/config");
const { videoToken } = require('./utils/tokens');

//routes for video chat. 
const sendTokenResponse = (token, res) => {
  res.set('Content-Type', 'application/json');
  res.send(
    JSON.stringify({
      token: token.toJwt()
    })
  );
};

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.get('/video/token', (req, res) => {
  const identity = req.query.identity;
  const room = req.query.room;
  const token = videoToken(identity, room, config);
  sendTokenResponse(token, res);

});
app.post('/video/token', (req, res) => {
  const identity = req.body.identity;
  const room = req.body.room;
  const token = videoToken(identity, room, config);
  sendTokenResponse(token, res);
});


// Add routes, both API and view
app.use(routes);


// Connect to the Mongo DB
mongoose.connect(
   process.env.MONGODB_URI ||
   "mongodb://localhost/sleep", 
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
   (err) => {
    if(err) return console.error(err);
    console.log("Connected to MongoDB");
  }

);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
