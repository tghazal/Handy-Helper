const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const User = require('./user.model');

const jobSchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: User
  },
  title: String,
  description: String,
  category: String,
  address: {
    address1: String,
    address2: String,
    city: String,
    state: String,
    zip: Number
  },
  bids: [
    {
      type: Schema.Types.ObjectId,
      ref: User,
      price: Number,
      status: {
        type: String,
        enum: ['pending', 'active', 'completed', 'failed']
      }
    }
  ]
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
