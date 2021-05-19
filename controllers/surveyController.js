const db = require("../models");
const jwt = require("jsonwebtoken")

// Defining methods for the surveyController
module.exports = {
  findAll: function(req, res) {
    db.Survey
      .find({
        //needs to be modified to search for logged in user
        // user: 1,
      })
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Survey
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
      const authHeader = req.headers.cookie;
      if (authHeader) {
          const token = authHeader.split('=')[1];
          jwt.verify(token, process.env.JWT_SECRET, (err, {user}) => {
              if (err) {
                  return res.sendStatus(403);
              }
              db.Survey
              .create(req.body)
              .then(({_id}) => db.User.findByIdAndUpdate(user, {$push: {surveys: _id}}))
              .then(userDoc => res.json(userDoc))
              
              .catch(err => {console.log(err); res.status(422).json(err)});
              
          });
      } else {
          res.sendStatus(401);
      }
  }

};



// findAll: function(req, res) {
//   db.Journal
//     .find(req.query)
//     .sort({ date: -1 })
//     .then(dbModel => res.json(dbModel))
//     .catch(err => res.status(422).json(err));
// },