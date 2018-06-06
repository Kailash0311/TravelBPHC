var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var planuserModel = new Schema({
    planid: String,
    username: String
});
var model = mongoose.model('planusers', planuserModel);
module.exports = model;