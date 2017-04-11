const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('views', __dirname+ '/client/views')
app.set('view engine', 'ejs')
app.set(express.static(__dirname + '/client/static'))
app.use(bodyParser.urlencoded({extended:true}))

require('./server/config/mongoose.js')

require('./server/config/routes.js')(app)

app.listen(8000, function(){
  console.log('FOUND THE BUG!')
})
