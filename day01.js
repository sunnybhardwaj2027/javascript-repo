// JavaScript – Basics Recap

// 🟢 Console:
// In JavaScript, we use `console.log()` to display output in the browser console.

// 🟢 Variable:
// A variable is simply the name assigned to a memory location where data is stored.

let age = 21;
let name = "Sunny";

// There will be a location in memory named "age" and the value 21 will be stored at that address.
// This is the concept of a variable.


// ================================
// 🟠 Data Types in JavaScript
// ================================

// ➤ Primitive Data Types (Immutable, stored by value):

// 1. String – Text enclosed in single '', double "", or backticks ``
let userName = "Alice";
console.log(userName); // "Alice"

// 2. Number – Represents integers and floating-point numbers
let ageNum = 25;
let price = 99.99;

// 3. BigInt – For very large integers (larger than 2^53 - 1)
let bigNumber = 12345678901234568901234567890123456890n;
console.log(bigNumber);            // 12345678901234568901234567890123456890n
console.log(typeof bigNumber);     // "bigint"

// 4. Boolean – Represents true or false
let isLoggedIn = true;
console.log(isLoggedIn);           // true

// 5. Undefined – A variable that has been declared but not assigned a value
let k;
console.log(k);                    // undefined

// 6. Null – Represents the intentional absence of any value
let empty = null;
console.log(empty);                // null

// 7. Symbol – Unique and immutable, often used as object keys
let id = Symbol("id");
console.log(id);                   // Symbol(id)

// 8. typeof undefined vs null
console.log(typeof undefined);     // "undefined"
console.log(typeof null);          // "object" (quirk in JavaScript)


// ➤ Non-Primitive (Reference) Data Types – Stored by reference:

// 1. Object – A collection of key-value pairs
let person = { name: "Alice", age: 25 };

// 2. Array – An ordered list of values
let fruits = ["apple", "banana", "cherry"];

// 3. Function – A block of code designed to perform a task
function greet() {
    console.log("Hello!");
}
greet(); // "Hello!"


// ➤ typeof Operator – Used to check the type of a value
console.log(typeof "hello");        // "string"
console.log(typeof 42);             // "number"
console.log(typeof true);           // "boolean"
console.log(typeof {});             // "object"
console.log(typeof []);             // "object" (arrays are objects)
console.log(typeof null);           // "object"
console.log(typeof undefined);      // "undefined"
console.log(typeof function(){});   // "function"


// ================================
// 🔵 let, var, and const
// ================================

// 1. var – Function-scoped, hoisted (initialized as undefined), can be redeclared and updated
function test() {
    console.log(x); // undefined (due to hoisting)
    var x = 10;
    console.log(x); // 10
}
test();

// var has no block scope
if (true) {
    var a = 5;
}
console.log(a); // 5 (accessible outside block)


// 2. let – Block-scoped, hoisted but in Temporal Dead Zone, can be updated but not redeclared in same scope
if (true) {
    let y = 20;
    console.log(y); // 20
}
// console.log(y); // ReferenceError: y is not defined


// 3. const – Block-scoped, must be initialized, cannot be reassigned (but object/array contents can change)
const z = 30;
// z = 40; // ❌ Error: Assignment to constant variable

const person2 = { name: "Alice" };
person2.name = "Bob"; // ✅ Allowed: object property changed


// ➤ Dynamic Typing
let n = 6;
console.log(typeof n); // "number"

n = true;
console.log(typeof n); // "boolean"
// Note: Initially the type of n was a number, later it became boolean.
// This is allowed in JavaScript because it's a dynamically typed language.


// ➤ String Concatenation
let str = "Tony" + " " + "Stark";
console.log(str); // "Tony Stark"

// ================================
// 🔴 Notes:
// - JavaScript is a dynamically typed language (type can change at runtime).
// - TypeScript is a statically typed language (type is fixed once declared).
