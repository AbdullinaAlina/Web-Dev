// Hello, object
let user = new Object();
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Check for Emptiness
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

// Sum object properties
function sumObjProperties(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}

// Multiply numeric property values by 2
function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof (obj[key]) == 'number') {
            obj[key] *= 2;
        }
    }
}