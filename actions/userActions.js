const User = require('../db/models/user')

module.exports = {
//pobieranie wszystkich danych
  async getAllUsers(req,res) {
    const doc = await User.find({});
    res.status(200).json(doc);
  },
//pobieranie jednej notatki
  async getUser(req, res) {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });
    res.status(200).json(user);
  },
//dodawanie nowej notatki
  async saveUser(req,res) {
    const email = req.body.email;
    const login = req.body.login;
    const password = req.body.password;
    const typeUser = req.body.typeUser;
    let newUser;
    try {
      newUser = new User({ email, login, password, typeUser });
      await newUser.save();
    } catch(error) {
      return res.status(404).json({ message: error.message });
    }
    res.status(201).json(newUser);
  },
}
