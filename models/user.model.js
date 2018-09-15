const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  //name
  //email
  //password
  //photo
  //address_book

  //jobs_me
  //--title
  //--description
  //--category
  //--address
  //--bids
  //--//--worker_profile_url
  //--//--worker_name
  //--//--price
  //--//--photo
  //--//--status (pending/confirmed/completed/failed)

  //jobs_others
  //--status (pending/active/completed/failed)
  //--title
  //--description
  //--proposed_price
  //--address
});

const User = mongoose.model("User", userSchema);

module.exports = User;