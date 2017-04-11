;(function () {
  'use strict'

  angular
    .module('myApp')
    .controller('friendController', Controller)

  function Controller (friendFactory, $location, $routeParams) {
    var self = this
    self.friend = { first: "Preset Data" }
    if($routeParams.person_id){
      friendFactory.show($routeParams.person_id, function(returnData){
        console.log(returnData)
        self.friend = returnData.data
      })
    }
    self.createFriend = function(){
      friendFactory.createFriend(self.friend, function(returnData){
        console.log(returnData)
      })
      $location.url('/')
    }
    self.index = function(){
      friendFactory.index(function(returnData){
        self.friends = returnData.data
      })
    }
    self.update = function(){
      friendFactory.update(self.human,$routeParams.person_id, function(returnData){
        console.log(returnData)
      })
      $location.url('/')

    }
    self.delete = function(){
      friendFactory.delete($routeParams.person_id,function(returnData){
        console.log(returnData)
      })
      $location.url('/')
    }
  }
})()
