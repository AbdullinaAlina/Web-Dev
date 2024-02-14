function checkAge(age) {
    // if (age > 18) {
    //   return true;
    // } else {
    //   return confirm('Did parents allow you?');
    // }

    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

function min(a, b) {
    return a > b ? b : a;
}

function pow(x, n) {
    if (n < 1)
        alert("Integers less than 1 not supported!");
    else
        return x ** n;
}