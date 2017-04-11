const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2, maxlength: 256 },
  _bid: {type:mongoose.Schema.ObjectId, ref:'Bid'},
}, { timestamps: true })

const BidSchema = new mongoose.Schema({
  product1: {type: Number, default:0, min:0 },
  product2: {type: Number, default:0, min:0 },
  product3: {type: Number, default:0, min:0 },
  _user: { type: mongoose.Schema.ObjectId, ref:'User' },
},{ timestamps: true })


mongoose.model('User', UserSchema)
mongoose.model('Bid', BidSchema)
