var express = require('express');
var app = express();
var path = require('path');
var api = require("./api/api");


var port = process.env.PORT || "3000"

app.use(express.static(path.resolve("src/client")));
app.use('/api', api);

/*** html landing page ***/
app.get("/", function (req, res) {
  res.sendFile(path.resolve("src/client/index.html"));
});

app.listen(port, function () {
  console.log("Avantica CookBook running in the port " + port);
});
