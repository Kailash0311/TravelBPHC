var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var requestSchema = new Schema({
  username: String,
  accesstoken: String,
  fullname: String,
  contactnum: String,
  bitsid: String
});
var model = mongoose.model('users', requestSchema);
module.exports = model;