'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Node Express server using TypeScript.');
});
app.listen(3000, function () {
  console.log('Server listen on port 3000');
});
