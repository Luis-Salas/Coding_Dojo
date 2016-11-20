console.log('users controller', process.ENV)
const mongoose = require('mongoose')
const User = mongoose.model('user')

function UsersController () {
  this.index = function (req, res) {
    User.find({}, function (err, users) {
      if (err) res.json(err)
      else res.json(users)
    })
  }

  this.createUser = function(req, res){
    User.findOne({name: req.body.name}, function (err,user){
      if(err) res.json({status: false, error: 'No user found'})
      else {
        console.log(user)
        if(!user){
          var user = new User(req.body)
          user.save(function(err){
            if(err) res.json({status: false, error: err})
            else{
            req.session.loggedIn = true
            req.session.user_id = user_id
            req.session.user = user.name
            res.json({ status: true, user:user})
          }
        })
      } else {
        req.session.createUser = true
        req.session.user = user._id
        req.session.name = user.name
        res.json({ status: true, user:user })
      }
    }
    })
  }
}

module.exports = new UsersController()
