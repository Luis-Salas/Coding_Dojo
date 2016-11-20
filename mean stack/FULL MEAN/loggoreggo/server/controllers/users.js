console.log('users controller', process.ENV)
const mongoose = require('mongoose')
const User = mongoose.model('User')
function UsersController () {
  this.index = function (req, res) {
    User.find({}, function (err, users) {
      if (err) res.json(err)
      else res.json(users)
    })
  }
  this.login = function (req, res) {
    User.findOne({email: req.body.email}, function (err, user) {
      if (err) res.json({status: false, error: 'No user found'})
      else {
        user.comparePasswords(req.body.password, function (result) {
          if (result) {
            req.session.loggedIn = true
            req.session.user_id = user._id
            req.session.first_name = user.first_name
            res.json({ status: true, user: user })
          }
          else res.json({ status: false, error: 'No user found' })
        })
      }
    })
  }
  this.register = function (req, res) {
    var user = new User(req.body)
    user.encryptUser(req.body.password, function () {
      user.save(function (err) {
        console.log('saving user')
        if (err) res.json({status: false, error: err})
        else res.json({status: true})
      })
    })
  }
  this.session = function (req, res) {
    console.log(req.session)
    if (req.session.loggedIn) res.json({status: true, _id: req.session.user_id, first_name: req.session.first_name})
    else res.json({status: false})
  }
  this.logout = function (req, res) {
    req.session.destroy(function () {
      res.json({status: true})
    })
  }
}
module.exports = new UsersController()
