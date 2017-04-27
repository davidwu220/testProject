import config from './config.js';
import express from 'express';
import 'handlebars';
var app = express();

app.get('/', function (req, res) {
  res.send('It Works!');
});

app.listen(config.port, () => {
    console.log('Node app is running on port', config.port);
});