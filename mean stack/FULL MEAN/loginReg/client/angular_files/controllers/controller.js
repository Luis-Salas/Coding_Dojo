;(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('usersController', Controller)

  function Controller (usersFactory, $location) {
    var self = this
    self.sample = 'kris'
    self.register = function () {
      console.log(self.users)
      userFactory.register(self.users, function () {
        self.users = {}
      })
    }
    this.login = function (req,res){
      console.log(req.body)
      User.findOne({email: req.body.email }, function(err, user){
         else {
          users.comparePasswords(req.body.password,function(result){
            if(result){
              req.session.loggedIn = true
              req.session.user_id = user._id
              req.session.first_name = user.first_name
              res.json({ status:true, user:user})
            }
            else res.json({status:false,error:'No user'})
          })
        }
      })
    }
    self.logout = function () {
      userFactory.logout(function () {
        $location.url('/')
      })
    }
    function getSession(){
      userFactory.getSession(function (data) {
        console.log(data)
        if (data.status) {
          self.myUser = {}
          self.myUser.first_name = data.first_name
          self.myUser.user_id = data._id
          $location.url('/success')
        }
        else $location.url('/')
      })
    }
    getSession()
  }
  }
})()
