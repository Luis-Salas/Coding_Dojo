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


var server = app.listen(8000, function (){
  console.log('_______________')
  console.log('listening to port 8000')
})

var io = require('socket.io').listen(server)

io.sockets.on('connection', function (socket){
  console.log("WE ARE USING SOCKETS");
  console.log(socket.id);
socket.on("button_clicked", function (data){
    console.log('Someone clicked a button!  reason: ' + data.reason);
    socket.emit('server_response', {reason: data.reason});
  })
})
