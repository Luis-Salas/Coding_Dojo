console.log('made it to backend questions')
const mongoose = require('mongoose')
const Question = mongoose.model('Question')

function questionController(){
  console.log('inside the controller')
  this.create = function(req,res){
    console.log('____')
    console.log(req.body)
    console.log(req.body.question)
    var question = new Question({content: req.body.question})
    question.save(function(err){
      if(err) res.json(err)
      else res.json(question)
    })
    console.log('+++++++')
    console.log(question)
  }
}

module.exports = new questionController()
