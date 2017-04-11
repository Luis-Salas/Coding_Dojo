const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 256 },
  _topic: {type:mongoose.Schema.ObjectId, ref:'Topic'},
}, { timestamps: true })

const TopicSchema = new mongoose.Schema({
  topic: { type: String, required: true, minlength: 2, maxlength: 256 },
  description: { type: String, required: true, minlength: 2, maxlength: 256 },
  category: { type: String, required: true, minlength: 2, maxlength: 256 },
  _creator: {type:mongoose.Schema.ObjectId, ref:'User', required:true}
}, { timestamps:true })

const PostSchema = new mongoose.Schema({
  post: { type: String, required: true, minlength: 2, maxlength: 256 },
  counter: { type: Number, required: true, default:0},
  _topic: {type:mongoose.Schema.ObjectId, ref:'Topic', required:true},
  _user: {type:mongoose.Schema.ObjectId, ref:'User', required:true},
}, { timestamps:true })

const CommentSchema = new mongoose.Schema({
  comment: { type: String, required: true, minlength: 2, maxlength: 256 },
  _post: {type:mongoose.Schema.ObjectId, ref:'Topic', required:true},
  _user: {type:mongoose.Schema.ObjectId, ref:'User', required:true},
}, { timestamps:true })



mongoose.model('User', UserSchema)
mongoose.model('Topic', TopicSchema)
mongoose.model('Post', PostSchema)
mongoose.model('Comment', CommentSchema)
