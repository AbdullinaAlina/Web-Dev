// Using "this" in object literal
function makeUser() {
    return {
        name: "John",
        ref: this
    };
}

let user = makeUser();

alert(user.ref.name); // The result is undefined

// Create a calculator
let calculator = {
    read() {
        this.a = +prompt("Enter the first value");
        this.b = +prompt("Enter the second value");
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
}

// Chaining
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { // shows the current step
        alert(this.step);
        return this;
    }
};