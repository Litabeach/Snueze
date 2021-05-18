const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema({
  title: { type: String },
  body: { type: String, required: true },
  date: { type: Date, default: Date.now },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
}
});

const Journal = mongoose.model("Journal", journalSchema);

module.exports = Journal;