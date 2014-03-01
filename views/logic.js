function add(one, two) {
    if (isNaN(one) || isNaN(two))
        return 'Not a number!'
    return one + two;
}

function sub(one, two) {
    if (isNaN(one) || isNaN(two))
        return 'Not a number!'
    return one - two;
}

function mul(one, two) {
    if (isNaN(one) || isNaN(two))
        return 'Not a number!'
    return one * two;
}

function div(one, two) {
    if (isNaN(one) || isNaN(two))
        return 'Not a number!'
    if (two == 0)
        return 'Cannot divide by 0!';
    else
        return one / two;
}

