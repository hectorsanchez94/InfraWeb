var app = require('./server2');
var assert = require('assert');
var superagent = require('superagent');
var mongoose = require('mongoose');
var schema = require('./schema');


describe('server',function () {
   var server ;

   beforeEach(function () {
       server = app().listen(8000);
   });


   afterEach(function () {

       var persona = mongoose.model('User',schema,'users');

       persona.find({email:'martin@martinfowler.com'},function (error,docs) {
           if (error){
               console.log(error);
               process.exit(1);
           }

           if (docs.length>1){
               persona.remove({email:'martin@martinfowler.com'},function (err) {
                   if(err) console.log(err);
               });

           }
           //process.exit(0);

       });
       server.close();


   });

   it('Insert',function (done) {
       superagent.get('http://localhost:8000',function (error,res) {
           assert.ifError(error);
           assert.equal(res.status,200);
           assert.equal(res.text,"Martin Fowler");
           done();
       });
   });

});
