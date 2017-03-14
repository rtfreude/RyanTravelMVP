'use strict';
var express = require('express');
//var model = require('/model');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

//now app can use body parser checklist date from a user post
app.use(bodyParser.urlencoded());
//app.use(bodyParser.json());

//
var port = process.env.PORT || 3000;
// serving static files

//get an instance of our express router...we won't have many routes..maybe two
//
var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'This is get request response' });
});

router.post('/posttest', function(req, res) {
    res.json({ message: 'This is a post request response' });
});

app.use('/travel', router);

app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, function(err) {
console.log("error: ", err)
console.log("Port " + port + " is currently active and listening to Ryan's commands!"
)})



