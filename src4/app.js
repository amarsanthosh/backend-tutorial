const express = require('express');

const morgan = require('morgan');
const connecDb = require('./configs/db.config');
const userRouter = require('./routes/users.routes');

const app = express();

//middlewares

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

connecDb();

app.use('/users',userRouter);

module.exports = app;