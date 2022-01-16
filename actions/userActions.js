const User = require('../db/models/user')

module.exports = {
  saveUser(req,res) {
    const newUser = new User({
      email: "aaaemailsfs",
      login: "aaaloginsfsf",
      password: "aaapasssfsword",
      typeUser: "aaasfsftypeUser",
    });

    newUser.save().then(()=>{console.log("notatak została zapisana")})
    res.send('Strona działa')
  },
}
