const mongoose = require('mongoose')
const Dragon = mongoose.model('Dragon')

function DragonController() {
  this.index = function(req,res){
    console.log('made it!')
    Dragon.find({}, function(err, dragons){
      if (err) res.json(err)
      else res.json(dragons)
    })
  }
  this.create = function(req, res){
    const dragon = new Dragon(req.body)
    dragon.save(function(err){
      if(err) res.json(err)
      else res.json(dragon)
    })
  }
  this.update = function (req,res) {
    Dragon.find({ _id: req.params.dragon_id},function(err, dragon){
      if(err) res.json(err)
      else{
        dragon.name = req.body.name
        dragon.color = req.body.color
        dragon.element = req.body.element
        dragon.moves = req.body.moves
        dragon.attributes = req.body.attributes
        dragon.save(function (err){
          if(err) res.json(err)
          else res.json(dragon)
        })
      }
    })
  }
  this.destroy = function(res, res){
    Dragon.findOne({_id: req.params.dragon_id }, function(err, dragon){
      if (err) res.json(err)
      else {
        dragon.remove()
        res.json('cool')
      }
    })
  }
  this.show = function(req, res){
    Dragon.findOne({_id: req.params.dragon_id}, function(err, dragon){
      if(err) res.json(err)
      else res.json(dragon)
    })
  }
}
module.exports = new DragonController()
