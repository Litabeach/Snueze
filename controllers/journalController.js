const db = require("../models");
const jwt = require("jsonwebtoken");

// Defining methods for the journalController
module.exports = {
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    if (req.cookies.userId) {
      db.User.find({"_id": req.cookies.userId}).then(data => db.Journal.find({"_id": {$in: data[0].journals}})
      .sort({ date: 1 })
      .then(data => res.json(data)))
  } else {
      res.sendStatus(401);
  }
    },

create: function(req, res) {
  // console.log(req.body);
  if (req.cookies.userId) {
    db.Journal.create(req.body)
    .then(({id}) => db.User.findByIdAndUpdate(req.cookies.userId, {$push: {journals: id}}))
    .then(userDoc => res.json(userDoc))
    .catch(err => {console.log(err); res.status(422).json(err)});  
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
      .findById(req.params.id)
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};