var mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/Travelbphc'
var db
mongoose.connect(url, function (err, database) {
  if (err) {
    console.log("Didn't connect to the database server.")
  } else {
    db = database;
    console.log("Connected succesfully to the database server.")
  }
})

module.exports = db;