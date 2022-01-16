const express = require('express');
const app = express();
const { port } = require('./config');

//routers
const apiRouter = require('./routes/api.js');

app.use('/', apiRouter)

app.listen(port, function() {
  console.log("serwer słucha.... http://localhost:" + port)
})
