const mongoose = require('mongoose')
var CommentSchema = new mongoose.Schema({
  name:{ type: String, required: true, maxlength:255, minlength:2},
  comment:{ type: String, required: true, minlength:1},
  _message:{type:mongoose.Schema.ObjectId, ref:'Message'}
})
const Comment = mongoose.model('Comment', CommentSchema)
