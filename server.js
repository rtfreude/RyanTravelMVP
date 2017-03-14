'use strict';
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

//now app can use body parser checklist date from a user post
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
var port = process.env.PORT || 3000;
// serving static files

//get an instance of our express router...we won't have many routes..maybe two
//
var router = express.Router();

router.get('/checklist', function(req, res) {
    res.json({ message: 'This is get request response' });
});

router.post('/checklist', function(req, res) {
    res.json({ message: 'This is a post request response' });
});

app.use('/', router);

app.use(express.static(path.join(__dirname, 'public')));


app.listen(port);
console.log("Port " + port + " is currently active and listening to Ryan's commands!")



