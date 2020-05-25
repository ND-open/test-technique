// Définition des modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

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
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// First route
app.get('/hello', (req, res) => {
    res.json('Hello World')
})

// Listen
const port = 8800;
app.listen(port, () => console.log(`Listenning on port ${port}`));