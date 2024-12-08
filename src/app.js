const express = require('express');
const bodyParser = require('body-parser');
const authMiddleware = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes'); 

const app = express();

app.use(bodyParser.json());
app.use(authMiddleware); 
app.use('/api', routes); 
app.use(errorHandler);  

module.exports = app;
