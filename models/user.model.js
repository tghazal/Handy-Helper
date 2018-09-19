const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Job = require('./job.model');

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  photo: String,
  phone: Number,
  addresses: [
    {
      primary: Boolean,
      address1: String,
      address2: String,
      city: String,
      state: String,
      zip: Number
    }
  ],
  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: Job
    }
  ],
  bids: [
    {
      type: Schema.Types.ObjectId,
      ref: Job
    }
  ],
  history: [
    {
      type: Schema.Types.ObjectId,
      ref: Job,
      self: Boolean
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;