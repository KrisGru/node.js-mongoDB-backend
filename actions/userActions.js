const User = require('../db/models/user')

module.exports = {
  async getAllUsers(req,res) {
      // const doc = await User.find({});
      //   console.log(doc);
      //   res.status(200).json(doc)
      res.send("api działa")
    },

  async getUser(req, res) {
    // const id = req.params.id;
    // const user = await User.findOne({ _id: id });
    // res.status(200).json(user);
    res.send("info o notatce")
  },

  saveUser(req,res) {
    // const newUser = new User({
    //   email: "aaaemailsfs",
    //   login: "aaaloginsfsf",
    //   password: "aaapasssfsword",
    //   typeUser: "aaasfsftypeUser",
    // });
    const title = req.body.title;
    const body = req.body.body;
    res.send("api działa"+ title + "content" +body)
    // newUser.save().then(()=>{console.log("notatak została zapisana")})
    // res.send('POST /users działa')
  },
}
