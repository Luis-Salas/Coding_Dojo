process.ENV = 8000
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const app = express();
app.use(session({
  secret: 'tacocat',
  resave: false,
  saveUnintialized: true
}))


app.use(bodyParser.json({ extended: true}));
app.use(express.static(__dirname + path.join("/client")));
app.use(express.static(__dirname + path.join("/bower_components")));

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen(process.ENV, function(){
  console.log(process.ENV)
  console.log('--------------')

})
