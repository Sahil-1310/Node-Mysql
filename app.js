require('dotenv').config();
require('./Model/db')
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import db from './Connection/connect'
const v1 = require('./V1/Router/index');
const app = express();

app.use(express.json()) //receive request from body
db.Connect();

app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

morgan.token('host', function (req, res) {
  return req.hostname;
});
app.use(morgan(':method :host:url  :status  :response-time ms'))

// app.use("/v1", v1)
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    })
})

app.listen(5000, () => {
  console.log("Connected to 5000 port");
})

