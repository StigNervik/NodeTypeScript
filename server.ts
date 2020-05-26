import express = require('express');

const app: express.Application = express();

app.get('/', function (req, res) {
  res.send('Hello Man');
});

app.listen(3000, function () {
  console.log('Server listen on port 3000');
});
