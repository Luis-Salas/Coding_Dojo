const mongoose = require('mongoose')

const FriendSchema = new mongoose.Schema({
  first_name: { type: String, required: true, minlength: 2, maxlength: 256 },
  last_name: { type: String, required: true, minlength: 2, maxlength: 256 },
  birthday: { type: Date, required: true},
}, { timestamps: true })

mongoose.model('Friend', FriendSchema)
