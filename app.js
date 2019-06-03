var express = require('express');
var app = express()
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
require('dotenv').config();
var authRouter = require('./routes/publicRoutes');
var cors = require('cors');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth',authRouter)

module.exports = app;