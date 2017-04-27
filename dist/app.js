'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _greeter = require('./greeter.js');

var _greeter2 = _interopRequireDefault(_greeter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.get('/', function (req, res) {
  res.send((0, _greeter2.default)());
});

app.listen(process.env.PORT || 5000);