const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
  user: { type: String, required: true, minlength: 2, maxlength: 256 },
  _message: {type:mongoose.schema.objectID, ref:'Message'},
  _comment: {type:mongoose.schema.objectID, ref:'Comment'}
}, { timestamps: true })


const MessageSchema = new mongoose.Schema({
  message: { type: String, required: true, minlength: 2, maxlength: 256 },
  _user: {type:mongoose.schema.objectID, ref:'User'},
  _comment: {type:mongoose.schema.objectID, ref:'Comment'}

}, { timestamps: true })

const CommentSchema = new mongoose.Schema({
  comment: { type: String, required: true, minlength: 2, maxlength: 256 },
  _message: {type:mongoose.schema.objectID, ref:'Message'},
}, { timestamps: true })

mongoose.model('User', userSchema)
mongoose.model('User', userSchema)
