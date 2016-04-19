var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.resolve("src/client")));

app.get('/', function (req, res) {
  res.sendFile(path.resolve("src/client/index.html"));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
