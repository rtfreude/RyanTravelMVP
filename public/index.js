var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/';

mongoClient.connect(url);

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Ryan is connected to mongo database!");
});


//var mongoSchema = mongoose.Schema;
//basic test
var siteSchema = mongoose.Schema({
  mySite: 'string'
})


var Site= mongoose.model({"Site", siteSchema})

Site.create({ mySite: 'The Beach' }, function (err, el) {
  if (err) return handleError(err);
  if (el) {console.log("Element saved!")}
})

module.exports = Site('Site', siteSchema)