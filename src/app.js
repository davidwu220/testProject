import express from 'express';
import greeter from './greeter.js';
import 'handlebars';
var app = express();

app.get('/', function (req, res) {
  res.send(greeter());
});

app.listen(process.env.PORT || 5000);