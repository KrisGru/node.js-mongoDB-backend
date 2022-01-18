const express = require('express');
const { port } = require('./config');
const apiRouter = require('./routes/api.js');
const bodyParser = require('body-parser');
const cors = require('cors');
//db
require('./db/mongoose.js');

const app = express();
//cors
app.use(cors());
// parsers
//Content-type: application/json
app.use(bodyParser.json());
//routers
app.use('/api/', apiRouter)
// server
app.listen(port, function() {
  console.log("serwer słucha.... http://localhost:" + port)
})
