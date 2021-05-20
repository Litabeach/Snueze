const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, },
    email: { type: String, required: true, index: { unique: true } },
    passwordHash: { type: String, required: true },
    surveys: [{
        type: Schema.Types.ObjectId,
        ref: "Survey"
    }],
    journals: [{
        type: Schema.Types.ObjectId,
        ref: "Journal"
    }]
});
 
const User = mongoose.model("User", userSchema);

module.exports = User;