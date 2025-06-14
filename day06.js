// JavaScript Functions => A block of code designed to perform a particular task.
// Functions are reusable — define once and call multiple times.

// 1. Function Declaration / Function Statement
function greet() {
    console.log("Hello, welcome!");
}

greet(); // Output: Hello, welcome!

// 2. Function with Parameters

function greetUser(username) {
    console.log("Hello " + username + "!");
}

greetUser("Sunny");    // Output: Hello Sunny!
greetUser("Shradha");  // Output: Hello Shradha!

// 3. Function with Multiple Parameters

function sum(x, y) {
    console.log(x + y);
}

sum(4, 5);      // Output: 9
sum(10, 20);    // Output: 30

// 4. Function with Return Statement

function multiply(a, b) {
    return a * b;
}

let result = multiply(5, 6);
console.log(result); // Output: 30

// Note: Code after return doesn't execute
function testReturn() {
    return 123;
    console.log("This will not run"); // Unreachable
}

console.log(testReturn()); // Output: 123

// 5. Function Expression => Function stored in a variable

const add = function(a, b) {
    return a + b;
};

console.log(add(3, 4)); // Output: 7

// Note: Function expressions are NOT hoisted.

// 6. Arrow Functions => Introduced in ES6, concise syntax

const square = (n) => {
    return n * n;
};

console.log(square(5)); // Output: 25

// One-liner arrow function with implicit return
const cube = n => n * n * n;

console.log(cube(3)); // Output: 27

// Arrow function with multiple parameters
const divide = (a, b) => a / b;

console.log(divide(10, 2)); // Output: 5

// 7. Functions Inside Objects => Called *methods*

const calculator = {
    sum: function(a, b) {
        return a + b;
    },
    multiply: (a, b) => {
        return a * b;
    }
};

console.log(calculator.sum(2, 3));      // Output: 5
console.log(calculator.multiply(3, 4)); // Output: 12

// Shorthand method syntax (works with regular functions)

const user = {
    name: "Sunny",
    greet() {
        console.log("Hi " + this.name);
    }
};

user.greet(); // Output: Hi Sunny

// 8. Function Hoisting
// Function declarations are hoisted

hoisted(); // Output: I'm hoisted!

function hoisted() {
    console.log("I'm hoisted!");
}

// Function expressions & arrow functions are NOT hoisted

// notHoisted(); ❌ Error: Cannot access 'notHoisted' before initialization

const notHoisted = function() {
    console.log("Not hoisted function");
};

// 9. Function Scope => Variables inside a function are not accessible outside

function outer() {
    let secret = "only inside";
    console.log(secret); // Works
}

// console.log(secret); ❌ Error — secret is not defined

// 10. Nested Functions

function outerFunc() {
    let outerVar = "I am outside!";

    function innerFunc() {
        console.log(outerVar); // Inner function can access outer scope
    }

    innerFunc();
}

outerFunc(); // Output: I am outside!

// 11. Higher Order Function => A function that:
// 1. Takes one or more functions as arguments
// 2. Returns a function

// Case 1: Takes a function as an argument

function multipleGreet(func, count){
    for(let i = 1; i <= count; i++){
        func();
    }
}

const greetAgain = () => {
    console.log("Hello");
}

multipleGreet(greetAgain, 3); // Output: Hello (3 times)

// Case 2: Returns a function

function oddEvenTest(request){
    if(request === "odd"){
        return function(n){
            console.log(n % 2 !== 0);
        };
    } else if(request === "even"){
        return function(n){
            console.log(n % 2 === 0);
        };
    } else {
        console.log("Wrong request");
    }
}

let isOdd = oddEvenTest("odd");
isOdd(3); // Output: true

let isEven = oddEvenTest("even");
isEven(3); // Output: false

// 12. Object Methods

const calculator1 = {
    num: 55,
    add: function(a, b){
        return a + b;
    },
    sub: function(a, b){
        return a - b;
    },
    mul: function(a, b){
        return a * b;
    }
};

console.log(calculator1.num);           // Output: 55
console.log(calculator1.add(23, 55));   // Output: 78

// 13. Shorthand Syntax for Object Methods

const calculator2 = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    }
};

console.log(calculator2.mul(5, 4)); // Output: 20
