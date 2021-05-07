const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true, index: { unique: true } },
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

module.exports = User;