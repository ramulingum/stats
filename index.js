var express = require('express');
var bodyParser = require('body-parser');
var CONFIG = require('./config')
var response = require('./lblib/response');
var routes = require('./lblib/router')["router"];

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/v'+CONFIG.API.VERSION, routes);

app.listen(CONFIG.SERVER.PORT);
