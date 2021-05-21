const db = require("../models");
const jwt = require("jsonwebtoken");

// Defining methods for the journalController
module.exports = {
  findAll: function(req, res) {
    db.Journal
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
      const authHeader = req.headers.cookie;
      if (authHeader) {
          const token = authHeader.split('=')[1];
          jwt.verify(token, process.env.JWT_SECRET, (err, { journals }) => {
              if (err) {
                  return res.sendStatus(403);
              }
              res.json(journals);
          });
      } else {
          res.sendStatus(401);
      }
    },

  //   db.Journal
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function(req, res) {
  //   db.Journal
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },


create: function(req, res) {
  const authHeader = req.headers.cookie;
  if (authHeader) {
      const token = authHeader.split('=')[1];
      jwt.verify(token, process.env.JWT_SECRET, (err, {user}) => {
          if (err) {
              return res.sendStatus(403);
          }
          db.Journal
          .create(req.body)
          .then(({_id}) => db.User.findByIdAndUpdate(user, {$push: {journals: _id}}))
          .then(userDoc => res.json(userDoc))
          .catch(err => {console.log(err); res.status(422).json(err)});
      });
  } else {
      res.sendStatus(401);
  }
},

  update: function(req, res) {
    db.Journal
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Journal
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};