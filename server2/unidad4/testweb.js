var assert= require('assert');
var app= require('./serverx.js');
var superagent = require('superagent');

describe('server test',function(){
  var server;
  beforeEach(function(){
   
   server= app().listen(8000);
   
  });

  afterEach(function(){
    server.close();


  });

  it('Prints "Hello world when users go /"',function(done){
   
   superagent.get('http://localhost:8000/',function(error,res){
    
    assert.ifError(error);
    
    assert.equal(res.status,200);
    assert.equal(res.text,"Hello, world!");
    done();

    });
  });

  it('Prints "Hello client when users go /cliente"',function(done){

   superagent.get('http://localhost:8000/cliente/2?formato=json',function(error,res){

    assert.ifError(error);

    assert.equal(res.status,200);
    assert.equal(res.text,'{"id":"1"}');
    done();

    });
  });
});
