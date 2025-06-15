// 'this' in JavaScript

// 'this' => refers to the object that is executing the current piece of code

const student = {
    name: 'sunny',
    age: 22,
    eng: 23,
    math: 25,
    phy: 53,

    getAvg() {
        console.log(this); // refers to the 'student' object
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
};

student.getAvg();
/*
Output:
{
  name: 'sunny',
  age: 22,
  eng: 23,
  math: 25,
  phy: 53,
  getAvg: [Function: getAvg]
}
sunny got avg marks = 33.666666666666664
*/

// Another example: regular function in global scope
function getAvg() {
    console.log(this); // refers to the global object (window in browser, global in Node)
}

getAvg(); // Output: Window or global

// try and catch => used to handle runtime errors gracefully

try {
    console.log(a); // 'a' is not defined
} catch {
    console.log("Variable 'a' is not defined.");
}

// Arrow Functions
// Syntax: const func = (arg1, arg2, ...) => { function body }

const sum = (a, b) => {
    console.log(a + b);
};

const cube = n => {
    return n * n * n;
};

const pow = (a, b) => {
    return a ** b;
};

sum(2, 5);           // 7
console.log(cube(3)); // 27
console.log(pow(2, 5)); // 32

// Arrow function with implicit return
// Syntax: const func = (args) => expression;

const sum1 = (a, b) => a + b;
const cube1 = a => a * a * a;

console.log(sum1(2, 55));  // 57
console.log(cube1(5));     // 125

// 'this' with arrow functions
// - Arrow functions DO NOT have their own 'this'
// - They inherit 'this' from the surrounding (lexical) scope
// - Regular functions get 'this' based on the caller

const students = {
    name: 'sunny',
    marks: 98,

    prop: this, // evaluated during object creation, refers to global object (window/global)

    getName: function () {
        console.log(this); // 'this' refers to 'students' object
        return this.name;
    },

    getMarks: () => {
        console.log(this); // 'this' refers to the outer lexical scope (global)
        return this.marks; // undefined (window.marks does not exist)
    },

    getInfo: function () {
        setTimeout(() => {
            console.log(this); // 'this' is 'students' because arrow function inherits from 'getInfo'
        }, 2000);
    },

    getInfo2: function () {
        setTimeout(function () {
            console.log(this); // regular function => 'this' is global object (window)
        }, 2000);
    }
};

console.log(students.prop);
/*
Output:
window or global object (because evaluated at object creation time)
*/

console.log(students.getName());
/*
Output:
students object
sunny
*/

console.log(students.getMarks());
/*
Output:
global object (in browser => window)
undefined (because window.marks is not defined)
*/

students.getInfo(); // logs 'students' after 2 seconds
students.getInfo2(); // logs 'window' (or 'global') after 2 seconds

// Summary:
// - Arrow functions do not have their own 'this'
// - They capture 'this' from the nearest non-arrow parent function (lexical scope)
// - Regular functions get 'this' from the calling object
// - Avoid arrow functions for methods if you need access to the object via 'this'
// - setTimeout uses global object as 'this' unless arrow functions are used
