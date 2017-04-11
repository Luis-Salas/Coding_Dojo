const mongoose = require('mongoose')
const Dog = mongoose.model('Dog')

module.exports = {
  index:function(req,res){
    Dog.find({}, function(err,dogs){
    res.render('index', {dogs:dogs})
  })
  },
  new:function(req,res){
    res.render('new')
  },
  submit:function(req,res){
    var dog = new Dog({name:req.body.name, color:req.body.color})
    dog.save(function (err){
      console.log("POST DATA", req.body);
      if(err){
        console.log('dog not made')
      } else {
        console.log('dog was made!!')
        res.redirect('/new')
      }
    })
  },
  show:function(req,res){
    res.render('show')

  }
}
