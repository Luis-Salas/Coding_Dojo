var express = require('express'),
app = express(),
path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

require('./server/config/mongoose.js')

require('./server/config/routes.js')(app)

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"./static")));

app.set('views', __dirname + '/client/views');

app.set('view engine', 'ejs');

app.listen(8000, function(){
  console.log("listening on port 8000")
})
