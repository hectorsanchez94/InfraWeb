var mongoose = require('mongoose');
var schema = require('./schema');
var inter = require('./interface');

mongoose.connect('mongodb://localhost:27017/infra_4');

//Los argumentos son: nombre del modelo, schema, nombe de la coleccion

var User = mongoose.model('User', schema, 'users');


var user = new User({
  name: 'Martin Fowler',
  email: 'martin@martinfowler.com'
});

user.save(function (error){
  if(error){
    console.log(error);
    process.exit(1);
  }
  User.find({email: 'martin@martinfowler.com'}, function(error,docs){
    if(error){
      console.log(error);
      process.exit(1);
    }
    console.log(require('util').inspect(docs));
    process.exit(0);
  });
});
