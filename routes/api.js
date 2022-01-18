const express = require('express');
const router = express.Router();

const userActions = require('../actions/userActions.js')

// login
router.post('/login', userActions.login);
//register new user
router.post('/register', userActions.register);

module.exports = router;
