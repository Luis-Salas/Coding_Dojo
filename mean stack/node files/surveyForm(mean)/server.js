var express = require ('express')
const bodyParser = require('body-parser')
var app = express()

app.use(express.static(__dirname +'/static'))
app.set('views', __dirname + '/views')

app.set('view engine', 'ejs')
console.log(__dirname)

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function (req, res){
  res.render('index')
})
app.post('/result', function(req, res){
  var result = {
    name: req.body.name,
    location: req.body.location,
    fave: req.body.favorite,
    comment: req.body.comment
  }
  res.render('result', result)
  console.log(req.body)
  console.log(req.body.name)

})

app.listen(8000, function (){
  console.log('_______________')
  console.log('8000')
})
