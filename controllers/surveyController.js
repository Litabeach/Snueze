const db = require("../models");

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
    db.Survey
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};