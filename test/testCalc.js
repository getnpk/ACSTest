var assert = require('assert');
var http = require('http');
var https = require('https');

function add(one, two, val) {
    url = 'http://localhost:8080/add?one=' + one + '&two=' + two;
    console.log(url);
    result = '{\n  \"value\": ' + val + '\n}';

    it('should return 200', function(done) {
        http.get(url, function(res) {
            assert.equal(200, res.statusCode);
            var data = '';
            res.on('data', function(chunk) {
                data += chunk;
            });
            res.on('end', function() {
                assert.equal(result, data);
                console.log(data);
                done();
            });
        });
    });
}


function sub(one, two, val) {
    url = 'http://localhost:8080/sub?one=' + one + '&two=' + two;
    console.log(url);
    result = '{\n  \"value\": ' + val + '\n}';

    it('should return 200', function(done) {
        http.get(url, function(res) {
            assert.equal(200, res.statusCode);
            var data = '';
            res.on('data', function(chunk) {
                data += chunk;
            });
            res.on('end', function() {
                assert.equal(result, data);
                console.log(data);
                done();
            });
        });
    });
}


function mul(one, two, val) {
    url = 'http://localhost:8080/mul?one=' + one + '&two=' + two;
    console.log(url);
    result = '{\n  \"value\": ' + val + '\n}';

    it('should return 200', function(done) {
        http.get(url, function(res) {
            assert.equal(200, res.statusCode);
            var data = '';
            res.on('data', function(chunk) {
                data += chunk;
            });
            res.on('end', function() {
                assert.equal(result, data);
                console.log(data);
                done();
            });
        });
    });
}



function div(one, two, val) {
    url = 'http://localhost:8080/div?one=' + one + '&two=' + two;
    console.log(url);
    result = '{\n  \"value\": ' + val + '\n}';

    it('should return 200', function(done) {
        http.get(url, function(res) {
            assert.equal(200, res.statusCode);
            var data = '';
            res.on('data', function(chunk) {
                data += chunk;
            });
            res.on('end', function() {
                assert.equal(result, data);
                console.log(data);
                done();
            });
        });
    });
}

describe('Addition api test', function() {
    a = 'abc';
    b = 12.0;
    c = 'monkey';
    d = '@#$*%(';
    add(10, 900, 910);
    add(900, 10, 910);
    add(3.14, 9.1, 12.24);
    add(a, b, '\"Not a number!\"');
    add(a, c, '\"Not a number!\"');
    add(c, d, '\"Not a number!\"');
    add("", "", '\"Not a number!\"');
});


describe('Subtraction api test', function() {
    a = 'abc';
    b = 12.0;
    c = 'monkey';
    d = '@#$*%(';
    sub(100, 90, 10);
    sub(90, 10, 80);
    sub(3.14, 9, -6.14);
    sub(a, b, '\"Not a number!\"');
    sub(a, c, '\"Not a number!\"');
    sub(c, d, '\"Not a number!\"');
    sub("", "", '\"Not a number!\"');
});


describe('Multiplication api test', function() {
    a = 'abc';
    b = 12.0;
    c = 'monkey';
    d = '@#$*%(';
    mul(100, 90, 9000);
    mul(90, 10, 900);
    mul(3.14, 0, 0);
    mul(a, b, '\"Not a number!\"');
    mul(a, c, '\"Not a number!\"');
    mul(c, d, '\"Not a number!\"');
    mul("", "", '\"Not a number!\"');
});



describe('Division api test', function() {
    a = 'abc';
    b = 12.0;
    c = 'monkey';
    d = '@#$*%(';
    div(100, 2.5, 40);
    div(90, 10, 9);
    div(3.14, 0, '\"Cannot divide by 0!\"');
    div(a, b, '\"Not a number!\"');
    div(a, c, '\"Not a number!\"');
    div(c, d, '\"Not a number!\"');
    div("", "", '\"Not a number!\"');
});
