// Last loop value

let i = 3;

while (i) {
    alert(i--);
}
// 1

// Which values does the while loop show?
i = 0;
while (++i < 5) alert(i); // 1-4
i = 0;
while (i++ < 5) alert(i); //1-5



// Output even numbers in the loop
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// Replace "for" with "while"
i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

// Repeat until the input is correct
let num;

do {
    num = prompt("Enter a number greater than 100!", 0);
} while (num <= 100 && num);



// Output prime numbers
function nextPrime(n) {
    for (let i = 2; i <= n; i++) { // for each i...
        for (let j = 2; j ** 2 <= i; j++) { // look for a divisor..
            if (i % j != 0) alert(i);// a prime
        }
    }
}
