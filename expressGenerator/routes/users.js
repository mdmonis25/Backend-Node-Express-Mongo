const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/practiceDb");

const userSchema = mongoose.Schema({
  username:String,
  name:String,
  age: Number
})

module.exports = mongoose.model("users",userSchema);