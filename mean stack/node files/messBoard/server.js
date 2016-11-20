//REQUIRES
const  express = require('express')
const bodyParser = require ('body-parser')

const app = express()

//CONFIG
app.set('views', __dirname + '/client/views')
app.set('view engine', 'ejs')
app.set(express.static(__dirname + '/client/static'))
app.use(bodyParser.urlencoded({ extended:true}))
//MONGOOSE CONNECTION
//MODELS
require('./server/config/mongoose.js')
//ROUTES
require('./server/config/routes.js')(app)
//SERVER
app.listen(8000, function(){
  console.log('---8000----')
})
