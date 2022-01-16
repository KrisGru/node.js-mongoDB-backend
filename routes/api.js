const express = require('express');
const router = express.Router();

const userActions = require('../actions/userActions.js')

// pobranie danych z serwera
router.get('/users', userActions.getAllUsers);
//pobranie jednego użytkownika z bazy danych
router.get('/users/:id', userActions.getUser);
//zapisanie nowego użytkownika
router.post('/users', userActions.saveUser);

module.exports = router;
