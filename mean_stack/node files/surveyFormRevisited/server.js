var express = require("express");
const bodyParser = require('body-parser')
var app = express();

app.use(express.static(__dirname +'/static'))
app.set('views', __dirname + '/views')

app.set('view engine', 'ejs')
console.log('________________________')
console.log(__dirname)

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function (req,res){
  res.render('index')
})

app.post('/info', function(req,res){
  var result = {
    name: req.body.name,
    location: req.body.location,
    language: req.body.language,
    comment: req.body.comment
  }
  res.render('info', result)
  console.log(result)
})

app.listen(8000,function(){
  console.log("listening to port 8000")
})
