console.log('users controller', process.ENV)
const mongoose = require('mongoose')
const User = mongoose.model('User')

function UsersController () {
  console.log('made it to the backend!')
  this.index = function (req, res) {
    User.find({}, function (err, users) {
      if (err) res.json(err)
      else res.json(users)
    })
  }
  this.login = function(req, res){
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
              req.session.user_id = user.id
              req.session.name = user.name
              console.log('hey')
              console.log(user.name)
              res.json({ status: true, user:user})
            }
          })
        } else {
          req.session.loggedIn = true
          req.session.user_id = user._id
          req.session.name = user.name
          console.log('hey')
          console.log(user.name)
          res.json({ status: true, user:user })
        }
      }
    })
  }


  this.session = function(req, res){
    console.log('wow!', req.session)
    if(req.session.loggedIn) res.json({status: true, _id: req.session.user_id, name: req.session.name})
    else res.json({status: false})
    console.log('wow!')
  }
}

module.exports = new UsersController()
