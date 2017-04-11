;(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('usersController', Controller)

  function Controller (userFactory, $location) {
    var self = this
    self.login = function (){
      userFactory.login(self.users, function(returnData){
        console.log('in callback', returnData)
        if(returnData.status){
          $location.url('/success')
        } else {
          alert('bad login')
        }
      })
    }

    function getSession(){
      userFactory.getSession(function(data){
        console.log('________')
        console.log(data)

        if(data.status){
          self.myUser = {}
          self.myUser.name = data.name
          self.myUser._id = data._id
          $location.url('/success')
        }
        else $location.url('/')
      })
    }
  }
  getSession()
})()
