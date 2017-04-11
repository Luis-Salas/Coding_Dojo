const dashboard = require('../controllers/dashboard.js')
module.exports = function(app) {
  app.get('/', function(req, res){
    dashboard.index(req,res)
  })
  app.get('/new', function(req,res){
    dashboard.new(req,res)
  })
  app.post('/submit',function(req,res){
    console.log('almost there')
    dashboard.submit(req,res)
  })
  app.get('/show/:id', function(req,res){
    Dog.find({ _id: req.params.id}, function(err,response){
      if(err){console.log(err);}
      res.render('show',{dog:response[0]})
    })
    dashboard.show(req,res)
  })
}
