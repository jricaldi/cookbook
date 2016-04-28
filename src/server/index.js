var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");

var port = process.env.PORT || "3000"
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.resolve("src/client")));

/*** html landing page ***/
app.get("/", function (req, res) {
  res.sendFile(path.resolve("src/client/index.html"));
});
/***/

/*** api rest ***/
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', router);
/***/

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});
