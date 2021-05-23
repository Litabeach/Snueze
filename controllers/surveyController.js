const db = require("../models");
const jwt = require("jsonwebtoken");
const { isValidObjectId } = require("mongoose");

// Defining methods for the surveyController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find({})
      .sort({ date: -1 }).limit(14)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    if (req.cookies.userId) {
        db.User.find({"_id": req.cookies.userId}).then(data => db.Survey.find({"_id": {$in: data[0].surveys}})
        .sort({ date: 1 })
        .then(data => res.json(data)))
    } else {
        res.sendStatus(401);
    }
  },
  create: function(req, res) {

    if (req.cookies.userId) {
        db.Survey.create(req.body)
        .then(({_id}) => db.User.findByIdAndUpdate(req.cookies.userId, {$push: {surveys: _id}}))
        .then(userDoc => res.json(userDoc))
        .catch(err => {console.log(err); res.status(422).json(err)});

    } else {
        res.sendStatus(401);
    }
  },

};