console.log('friends model');
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var FriendSchema = new mongoose.Schema({
  name: String,
  favoriteLanguage:String
});
mongoose.model('Friend', FriendSchema);
