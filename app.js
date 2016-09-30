var express = require('express');
var index = require('./routes/index');
var user = require('./routes/user');
var article = require('./routes/article');
var app = express();
app.use('/', index);
app.use('/user', user);
app.use('/article', article);
app.listen(9090);