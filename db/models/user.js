const mongoose = require('mongoose');

const User = mongoose.model("User", {
  email: String,
  login: String,
  password: String,
  typeUser: String,
});


module.exports = User;
