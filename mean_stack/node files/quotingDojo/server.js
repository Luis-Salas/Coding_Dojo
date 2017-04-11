var express = require('express')
const bodyParser = require('body-parser')
var mongoose = require('mongoose')
var app = express()

mongoose.connect('mongodb://localhost/basic_mongoose');

var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
});
var Quote = mongoose.model('quotes', QuoteSchema);

app.use(express.static(__dirname +'/static'))
app.set('views', __dirname + '/views')
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs')
console.log(__dirname)

app.get('/', function (req, res){
  res.render('index')
})
app.post('/result', function(req, res) {
  console.log("POST DATA", req.body);
  var quote = new Quote({name: req.body.name, quote: req.body.quote});
  quote.save(function(err) {
    if(err) {
      console.log('something went wrong');
    } else {
      console.log('successfully added a user!');
      
      res.redirect('/show');
    }
  })
})
app.get('/show', function (req, res){
  Quote.find({}, function(err, quotes){
    res.render('show', {quotes:quotes})
  })
})

var server= app.listen(8000, function(){
  console.log('port 8000')
})
