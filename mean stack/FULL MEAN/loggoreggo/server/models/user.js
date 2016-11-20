const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true, minlength: 2, maxlength: 256 },
  last_name: { type: String, required: true, minlength: 2, maxlength: 256 },
  email: { type: String, required: true, minlength: 2, maxlength: 256 },
  pw_hash: { type: String, minlength: 2, maxlength: 256 }
}, { timestamps: true })

userSchema.methods.encryptUser = function (password, callback) {
  var user = this
  bcrypt.genSalt(10, function (err, salt) {
    if (err) console.log(err)
    else {
      bcrypt.hash(password, salt, function (err, hash) {
        if (err) console.log(err)
        else {
          user.pw_hash = hash
          callback()
        }
      })
    }
  })
}

userSchema.methods.comparePasswords = function (password, callback) {
  var user = this
  bcrypt.compare(password, user.pw_hash, function (err, result) {
    callback(result)
  })
}

userSchema.pre('save', function (done) {
  console.log('in pre', this)
  done()
})

mongoose.model('User', userSchema)
