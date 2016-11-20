/////////////////MODULES////////////////////
var express = require ('express')
const bodyParser = require('body-parser')
//////////////CONFIG////////////////
var app = express()
/////////////SETING UP STATIC//////////
app.use(express.static(__dirname + '/static'))
/////LOCATE VIEWS FOLDER TO HELP SERVER FIND OUR VIEWS///////
app.set('views', __dirname + '/views')
/////our templating engine is ejs, our server should read ejs files
app.set('view engine', 'ejs')
console.log(__dirname)
//un-encode our url to extract the form information we require
app.use(bodyParser.urlencoded({extended:true}))
/////////////////ROUTES///////////////////
/////process a / request and load the index file
app.get('/', function (req, res){
  res.render('index')
  console.log('-------------')
})
app.post('/craycray', function (req, res){
  var cray = {
    craycray : req.body.name
  }
  res.render ('craycray', cray)
  console.log(req.body)
  console.log(req.body.name)

})
//////////////////LAUNCHING SERVER///////////////vi
app.listen(8000, function (){
  console.log('555555555')
  console.log('8000')

})
// console.log(app)
