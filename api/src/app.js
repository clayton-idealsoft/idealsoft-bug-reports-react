const express = require('express');
const app = express();
const router = express.Router();

//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/bugRoute');

app.use('/', index);
app.use('/bug', personRoute);

module.exports = app;