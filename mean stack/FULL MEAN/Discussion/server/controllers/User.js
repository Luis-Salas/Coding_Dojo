const mongoose = require('mongoose')
const User = mongoose.model('User')


function UserController(){
  this.index = function(req,res){
    User.findOne({name:req.body.name}, function(err,user){
      if(err) res.json(err)({status:false, error: 'no user found'})
      else{
        console.log(req.body)
        if(!user){
          var user = new User(req.body)
          user.save(function(err){
            if(err) res.json({status:false, error: err})
            else{
              req.session.loggedIn = true
              console.log(req.session.user_id= user._id)
              req.session.name = user.name
              console.log('session in being used')
              console.log(req.session.loggedIn)
              res.json({ status: true, user:user})
            }
          })
        } else {
          console.log(user._id)
          console.log('GOING TO ELSE')
          req.session.loggedIn = true
          req.session.user_id = user._id
          req.session.name = user.name
          console.log('session is being USED')
          res.json({ status: true, user: user})
        }
      }
    })
  }
  this.session = function(req, res){
    if(req.session) res.json({status: true, _id: req.session.user_id, name: req.session.name})
    else res.json({status: false})
    console.log(req.session.user_id)
  }
}

module.exports = new UserController()
