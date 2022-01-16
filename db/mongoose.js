const mongoose = require('mongoose');
const { database } = require('../config')
//nazwa bazy danych. Jesli nie ma to sie utworzy
mongoose.connect(database, {});
