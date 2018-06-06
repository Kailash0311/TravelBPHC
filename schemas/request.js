var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var requestSchema = new Schema({
  planid: String,
  username: String
});
var model = mongoose.model('requests', requestSchema);
module.exports = model;