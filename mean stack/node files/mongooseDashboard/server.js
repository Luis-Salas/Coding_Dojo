var express = require('express')
const bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express()

mongoose.connect('mongodb://localhost/basic_mongoose');

var DoggoSchema = new mongoose.Schema({
  name:String
});
var Doggo = mongoose.model('dogs',DoggoSchema)

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(req, res){
  console.log("POST DATA", req.body);
  var dog = new Doggo({name:req.body.name})
  dog.save(function(err){
    if(err){
      console.log('AHHHHHHHHHHHHHHH')
    }
    else{
      console.log('Heyyyy thats pretty good!')
    }
  })
  res.render('index')
})

app.get('/new', function(req, res){
  res.render('new')
})

app.listen(8000, function(){
  console.log('WOW!!')*20
})
