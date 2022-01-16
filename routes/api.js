const express = require('express');
const router = express.Router();

const testActions = require('../actions/test.js')

router.get('/api/', testActions.homepage);


module.exports = router;
