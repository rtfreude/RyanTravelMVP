var mongoose    =   require("mongoose");

mongoose.connect('mongodb://localhost:27017/posttest');
// create instance of Schemava
//

var db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Ryan is connected to mongo database!");
});




// var mongoSchema =   mongoose.Schema;
// // create schema
// var siteSchema  = {
//     "mySite" : String,

// };
// // create model if not exists.
module.exports = db;




// var siteSchema = mongoose.Schema({
//   mySite: 'string'
// })


// var Site= mongoose.model({"Site", siteSchema})

// Site.create({ mySite: 'The Beach' }, function (err, el) {
//   if (err) return handleError(err);
//   if (el) {console.log("Element saved!")}
// })

// module.exports = Site('Site', siteSchema)