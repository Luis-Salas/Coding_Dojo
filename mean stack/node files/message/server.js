var express = require('express')
const bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express()

mongoose.connect('mongodb://localhost/basic_mongoose');

var MessageSchema = new mongoose.Schema({
  name: String,
  message: String
});
var Message = mongoose.model('messages', MessageSchema);

app.use(express.static(__dirname +'/static'))
app.set('views', __dirname + '/views')
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs')
console.log(__dirname)

app.get('/', function (req, res){
  res.render('index')
})

app.post('/message', function(req, res) {
  console.log("POST DATA", req.body);
  var message = new Message({name: req.body.name, message: req.body.message});
  message.save(function(err) {
    if(err) {
      console.log('something went wrong');
    } else {
      console.log('WOWWOWOWOWOWOWOWOWOWOWWOOWOWOWO!!!');
      res.redirect('/')
    }
  })
})

var server= app.listen(8000, function(){
  console.log('FIXED IT!') *10
})
