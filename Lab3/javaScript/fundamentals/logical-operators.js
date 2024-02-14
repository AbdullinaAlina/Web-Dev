alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // first 1, then 2
alert(1 && null && 2); // null
alert(alert(1) && alert(2)); //1, undefined
alert(null || 2 && 3 || 4); // 3

// Check the range between
if (age >= 14 && age <= 90);

// Check the range outside
if (age < 14 || age > 90);


// A question about "if"
// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert('first');

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert('second');

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert('third');

// Check the login
let login = prompt("");
if (login == "" || login == null) {
    alert('Canceled');
} else if (login == "Admin") {
    let password = prompt("Enter password");
    if (password == 'TheMaster') {
        alert("Welcome!");
    } else if (password == "" || password == null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }
} else {
    alert("I don't know you");
}