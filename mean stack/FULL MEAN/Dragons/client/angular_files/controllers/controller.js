console.log('in controller')
;(function () {
  'use strict'

  angular
  .module('myApp')
  .controller('dragonController', Controller)

  function Controller (DragonFactory, $location, $routeParams){
    var self = this
    if ($routeParams.dragon_id){
      self.showDragon = function(dragon_idy){
        console.log(dragon_id)
        console.log('we have id')
        DragonFactory.show(dragon_id, function(){
          self.dragon = dragon
        })
      }
    }

    self.getDragons = function(){
      DragonFactory.index(function(data){
        console.log('____')
        console.log(data)
        self.dragons = data
      })
    }

    self.createDragons = function(){
      console.log('made it to create Dragon')
      console.log(self.newDragon)
      DragonFactory.createDragons(self.newDragon, function(){
        $location.url('/')
      })
    }
  }
})()
