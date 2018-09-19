const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  email :{type: String ,unique: true , required: true},
  name: { type: String },
  salt: {type: String} ,
  hash: {type: String} 
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;