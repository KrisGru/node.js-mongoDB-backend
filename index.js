const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api.js');

//db
require('./db/mongoose.js');
//routers

app.use('/', apiRouter)

app.listen(port, function() {
  console.log("serwer słucha.... http://localhost:" + port)
})
