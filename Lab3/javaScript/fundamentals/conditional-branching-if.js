// if (a string with zero)
if ("0") {
    alert('Hello');
}

//Will show, since "0" is not an empty string

// The name of JavaScript
let name = prompt("What is the “official” name of JavaScript?", "");
if (name === "ECMAScript") {
    alert('Right!');
} else {
    alert("You don't know? ECMAScript!");
}

// Show the sign
let number = prompt("Enter a number", "0");
if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}

// Rewrite 'if' into '?'
let result;

// if (a + b < 4) {
//     result = 'Below';
// } else {
//     result = 'Over';
// }

result = (a + b < 4) ? 'Below' : 'Over';

// Rewrite 'if..else' into '?'
let message;

// if (login == 'Employee') {
//     message = 'Hello';
// } else if (login == 'Director') {
//     message = 'Greetings';
// } else if (login == '') {
//     message = 'No login';
// } else {
//     message = '';
// }

message = (login == 'Employee') ? 'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' :
            '';

