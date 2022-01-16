const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api.js');
const bodyParser = require('body-parser');
const cors = require('cors');

//cors
app.use(cors());
//db
require('./db/mongoose.js');
// parsers
//Content-type: application/json
app.use(bodyParser.json());
//routers
app.use('/api/', apiRouter)
// server
app.listen(port, function() {
  console.log("serwer słucha.... http://localhost:" + port)
})
