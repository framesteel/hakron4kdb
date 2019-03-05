var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    required: 'Please provide an email'
  },
  password: {
    type: String,
    required: 'Please provide a password'
  },
  hasapplication: {
    type: Boolean,
    required: 'n/a'
  }
});

module.exports = mongoose.model('Users', UserSchema);
