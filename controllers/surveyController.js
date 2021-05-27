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
        db.User.find({"_id": req.cookies.userId}).populate("surveys").then(data => {
        
          const completedSurveyArray = data[0].surveys.filter(survey => req.body.date === survey.date.toISOString().split('T')[0] )
          if (completedSurveyArray.length === 0) {
            db.Survey.create(req.body)
            .then(({_id}) => db.User.findByIdAndUpdate(req.cookies.userId, {$push: {surveys: _id}}))
            .then(userDoc => res.json(userDoc))
            .catch(err => {console.log(err); res.status(422).json(err)});
          } else {
            res.status(409).json({msg:"Duplicate Found"});
            console.log("duplicate found")
          }
        })
    } else {
        res.sendStatus(401);
    }
  },

};