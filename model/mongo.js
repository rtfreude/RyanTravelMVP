var mongoose    =   require("mongoose");

mongoose.connect('mongodb://localhost:27017/posttest');
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var siteSchema  = {
    "mySite" : String,

};
// create model if not exists.
module.exports = mongoose.model('Site', siteSchema);

// var siteSchema = mongoose.Schema({
//   mySite: 'string'
// })


// var Site= mongoose.model({"Site", siteSchema})

// Site.create({ mySite: 'The Beach' }, function (err, el) {
//   if (err) return handleError(err);
//   if (el) {console.log("Element saved!")}
// })

// module.exports = Site('Site', siteSchema)