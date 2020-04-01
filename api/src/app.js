const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const bugsRoute = require('./routes/bugRoute');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', index);
app.use('/api/bugs', bugsRoute);

module.exports = app;