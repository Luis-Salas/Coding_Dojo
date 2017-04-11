const mongoose = require('mongoose')
var DogSchema = new mongoose.Schema({
  name:{type: String, required: true, minlength:2},
  color:{type: String, required:true, minlength:2}
})
const Dog = mongoose.model('Dog', DogSchema)
