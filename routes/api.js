const express = require('express');
const router = express.Router();

const userActions = require('../actions/userActions.js')

router.get('/api/', userActions.saveUser);


module.exports = router;
