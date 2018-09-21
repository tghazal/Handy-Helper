const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Job = require('./job.model');

const UserDataSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  photo: String,
  phone: Number,
  skills: [{ id: Number, skill: String }],
  address:
  {
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: Number
  }
  ,
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

const UserData = mongoose.model("UserData", UserDataSchema);

module.exports = UserData;