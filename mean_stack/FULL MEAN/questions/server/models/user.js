const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 256 },
  _question: {type:mongoose.Schema.ObjectId, ref:'Poll'},
}, { timestamps: true })

const PollSchema = new mongoose.Schema({
  question: {type: String, required: true, minlength:2, maxlength: 256 },
  option_1: {type: String, required:true, minlength:2, maxlength:256},
  option_2: {type: String, required:true, minlength:2, maxlength:256},
  option_3: {type: String, required:true, minlength:2, maxlength:256},
  option_4: {type: String, required:true, minlength:2, maxlength:256},
  vote1: {type:Number, default:0, min:0 , max: 50},
  vote2: {type:Number, default:0, min:0 , max: 50},
  vote3: {type:Number, default:0, min:0 , max: 50},
  vote4: {type:Number, default:0, min:0 , max: 50},
  _user: { type: mongoose.Schema.ObjectId, ref:'User' },
},{ timestamps: true })


mongoose.model('User', UserSchema)
mongoose.model('Poll', PollSchema)
