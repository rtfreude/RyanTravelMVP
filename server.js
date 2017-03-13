var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//now app can use body parser checklist date from a user post
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//may have to change this port later
var port = 3000;

//get an instance of our express router...we won't have many routes..maybe two
//
var router = express.Router();

//do a simple get request to make sure this is wroking
router.get('/checklist', function(req, res) {
    res.json({ message: 'This is get request response' });
});

router.post('/checklist', function(req, res) {
    res.json({ message: 'This is a post request response' });
});

//prefix routes with travel
app.use('/travel', router);


app.listen(port);
console.log("Port " + port + " is currently active and listening to Ryan's commands!")


