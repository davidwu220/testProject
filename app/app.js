import express from 'express';
import greeter from './greeter.js';
var app = express();

app.get('/', function (req, res) {
  res.send(greeter());
});

app.listen(process.env.PORT || 5000);