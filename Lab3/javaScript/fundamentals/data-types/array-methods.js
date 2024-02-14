// Translate border-left-width to borderLeftWidth
function camelize(str) {
    return str
        .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
        .map(
            // capitalizes first letters of all array items except the first one
            // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

// Filter range
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

// Filter range "in place"
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        // remove if outside of the interval
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

// Sort in decreasing order
arr.sort((a) => -a);

// Copy and sort array
function copySorted(arr) {
    return arr.slice().sort();
}

// Create an extendable calculator
function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function (str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    };

    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

// Map to names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(item => item.name);

alert(names); // John, Pete, Mary

// Map to objects
let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

//  Sort users by age
function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

// Shuffle an array
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

// Get average age
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

// Filter unique array members
function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}

// Create keyed object from array
function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}