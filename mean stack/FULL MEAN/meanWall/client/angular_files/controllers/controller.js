;(function () {
  'use strict'

  angular
  .module('myApp')
  .controller('usersController', Controller)

  function Controller (userFactory, $location) {
    var self = this

    self.createUser = function (){
      console.log(self.users)
      userFactory.createUser(self.users, function(returnData){
        console.log('in callback', returnData)
        if(returnData.status){
          $location.url('/success')
      } else {
        alert('bad login')
      }
    })
  }
}
})()
