ReactDOM.render(

  <MyTravelApp />, document.getElementById('myTravelApp')

);

var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/checklist';

mongoClient.connect(url, function(err, db) {

  console.log('Ryan is connected to MongoDB!');

})

