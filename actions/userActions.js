const User = require('../db/models/user')

module.exports = {
//login
  async login(req, res) {
    try {
      const { login, password } = req.body;
      const user = await User.findOne({ login, password });
      console.log('user', user)
      if(user===null){
        res.status(401).json({ message: "User doesn't exist" });
      }else{
        res.status(200).json(user);
      }
    } catch(error) {
      res.status(500).json({ message: erorr.message })
    }
  },
//register
  async register(req,res) {
    const { email, login, password, typeUser } = req.body;

    try {
      let newUser = new User({ email, login, password, typeUser });
      await newUser.save();
      res.status(201).json(newUser)
      console.log('newUser', newUser)
    } catch(error) {
      return res.status(500).json({ message: error.message });
    }
  },
}
