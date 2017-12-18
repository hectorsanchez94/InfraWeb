
var express= require('express');

module.exports= function(){
 
  var app = express();
  app.use(function(req,res,next){
    console.log(' %, %, % ',req.url, (new Date).toString(), req.method);
    return next();
  }); 
    app.get('/',function(req,res){     
      res.send('Hello, world!');
    });
   
    app.get('/hola',function(req,res){
      res.send('¡Hello!');
    });
   	
    app.get('/goodbye',function(req,res){
      res.send('¡Good Bye!');
    });

    app.get('/cliente/:id', function(req, res){
      if(req.query.formato=='json'){
        let cliente={};
	cliente.id = req.params.id;
	cliente.name = req.query.name;
	res.json(cliente);
      }
		
//Recuperar con &name=hector
      else{
        res.send(' Cliente ' + req.params.id + ' Formato '+req.query.formato + " Name " + req.query.name);
      }
    });
  return app;
};

