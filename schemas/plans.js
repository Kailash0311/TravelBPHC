var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var planSchema = new  Schema({
  planid: String,
  to: String,
  from: String,
  date: String,
  time: String,
  maxnum: Number,
  adminid: String
})

var model = mongoose.model('plans',planSchema);
module.exports = model;