var assert = require('assert');

function add(one, two) {
    if (isNaN(one) || isNaN(two))
        return 'Not a number!';
    return one + two;
}

function sub(one, two) {
    if (isNaN(one) || isNaN(two))
        return 'Not a number!';
    return one - two;
}

function mul(one, two) {
    if (isNaN(one) || isNaN(two))
        return 'Not a number!';
    return one * two;
}

function div(one, two) {
    if (isNaN(one) || isNaN(two))
        return 'Not a number!';
    if (two == 0)
        return 'Cannot divide by 0!';
    else
        return one / two;
}

describe('add', function(){
    it('should return sum', function(){
      assert.equal(8, add(3,5));
      assert.equal(-3.787, add(6.983, -10.77));
      
      a = 'abc';
      b = 12.0;
      c = 'monkey';
      d = '@#$*%(';
      
      assert.equal('Not a number!', add(a,b));
      assert.equal('Not a number!', add(b,c));
      assert.equal('Not a number!', add(a,c));
      assert.equal('Not a number!', add(a,d));
      assert.equal('Not a number!', add("",""));
      
      assert.equal(12.24, add(3.14,9.1));
      
    });
});

describe('sub', function(){
    it('should return balance', function(){
      assert.equal(-2, sub(3,5));
      assert.equal(2.04, sub(3.33, 1.29));
      
      a = 'abc';
      b = 10;
      c = 'monkey';
      d = '@#$*%(';
      assert.equal('Not a number!', sub(a,b));
      assert.equal('Not a number!', sub(b,c));
      assert.equal('Not a number!', sub(a,c));
      assert.equal('Not a number!', sub(a,d));
      assert.equal('Not a number!', sub("",""));
    });
});

describe('mul', function(){
    it('should return product', function(){
      assert.equal(15, mul(3,5));
      assert.equal(28.574, mul(3.14,9.1));
      
      a = 'abc';
      b = 10;
      c = 'monkey';
      d = '@#$*%(';
      assert.equal('Not a number!', mul(a,b));
      assert.equal('Not a number!', mul(b,c));
      assert.equal('Not a number!', mul(a,c));
      assert.equal('Not a number!', mul(a,d));
      assert.equal('Not a number!', mul("",""));
      
      
    });
});

describe('div', function(){
    it('should return quotient', function(){
      assert.equal(5, div(10,2));
      assert.equal(0.3450549450549451, div(3.14,9.1));
      assert.equal(0.34, div(3.14,9.1)); //fail 
      
      a = 'abc';
      b = 10;
      c = 'monkey';
      d = '@#$*%(';
      assert.equal('Not a number!', div(a,b));
      assert.equal('Not a number!', div(b,c));
      assert.equal('Not a number!', div(a,c));
      
      assert.equal('Not a number!', div(a,c));
      assert.equal('Not a number!', div(a,d));
      
      assert.equal('Not a number!', div("",""));
      
      assert.equal('Cannot divide by 0!', div(3,0));
    });
});
