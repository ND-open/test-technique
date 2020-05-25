// Définition des modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Connexion à la base de donnée
mongoose
  .connect("mongodb://localhost/db",
    { useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true })
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((e) => {
    console.log("Error while DB connecting");
    console.log(e);
  });

// Définition APP
const app = express();

// Body Parser
const urlencodedParser = bodyParser.urlencoded({
    extended : true
})
app.use(urlencodedParser);
app.use(bodyParser.json());

// CORS
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Router
const router = express.Router();
app.use('/user', router);
require(__dirname + "/controllers/userController")(router);


// Listen
const port = 8800;
app.listen(port, () => console.log(`Listenning on port ${port}`));