function add(req, res) {
    var one = parseFloat(req.query.one);
    var two = parseFloat(req.query.two);
    
    var result;
    
    if (isNaN(one) || isNaN(two))
          result = 'Not a number!';
    else
        result = one + two;

    
    console.log("Result: " + result);
//    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(200, {value : result});
    
}


function sub(req, res) {
    var one = parseFloat(req.query.one);
    var two = parseFloat(req.query.two);
    
    var result;
    
    if (isNaN(one) || isNaN(two))
          result = 'Not a number!';
    else
        result = one - two;
    
    console.log("Result: " + result);
//    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(200, {value : result});
    
}


function mul(req, res) {
    
    var one = parseFloat(req.query.one);
    var two = parseFloat(req.query.two);
    
    var result;
    
    if (isNaN(one) || isNaN(two))
          result = 'Not a number!';
    else
        result = one * two;
    
    console.log("Result: " + result);
//    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(200, {value : result});
    
}


function div(req, res) {
    
    var one = parseFloat(req.query.one);
    var two = parseFloat(req.query.two);
    
    var result;
    
    if (isNaN(one) || isNaN(two))
          result = 'Not a number!';
    else if (two === 0)
        result = 'Cannot divide by 0!';
    else
        result = one / two;
    
    console.log("Result: " + result);
//    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(200, {value : result});
    
}