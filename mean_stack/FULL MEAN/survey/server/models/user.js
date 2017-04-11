const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 256 },
  _question: {type:mongoose.Schema.ObjectId, ref:'Question'},
}, { timestamps: true })

const QuestionSchema = new mongoose.Schema({
  content: {type: String, required: true, minlength:2, maxlength: 256 },
  _user: { type: mongoose.Schema.ObjectId, ref:'User'},
},{ timestamps: true })


mongoose.model('User', UserSchema)
mongoose.model('Question', QuestionSchema)
