var assert = require('assert');
var chai = require("chai"),
    expect = chai.expect;

chai.use(require("chai-sorted"));

describe('My feature 1', function(){

  it('Verifica a "a=A"',function(){

    var a='A';

    assert.equal(a,'A');
  });

  it('Verifica que b "b<>A"', function(){
    var b = 'B';
    assert.notEqual(b,'A');
  });

  it('Verifica que sea array', function(){
    var array = [1,2,3,4];
    assert(Array.isArray(array));
  });

  it('Verifica que sea array ordenada',function(){
    var array = [1,2,3];
    expect(array).to.be.sorted(0);
  });
});
