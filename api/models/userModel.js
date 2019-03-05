var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {
    type: String,
    required: 'Please provide a username'
  },
  password: {
    type: String,
    required: 'Please provide a password'
  },
});

module.exports = mongoose.model('Users', UserSchema);
