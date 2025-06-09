// javascript -- means console

// variable -> a variable is simply the name to storage location

// let age = 21;
// let name = "sunny";

// there will be location in memory whose name is going to be age and 21 will be stored at that address this is the concept of variable.


// datatype


// primitive datatype -> these are immutable and store by value

// 1. string -> text enclosed in single ', double ", or backticks `

let name = "Alice";
console.log(name);

// 2. numbers -> represents both integers and floating-point numbers

let age = 25;
let price = 99.99;

// 3. BigInt -> for integers larger than 2^53 -1
let bigNumber = 12345678901234568901234567890123456890n;
console.log(bigNumber);
console.log(typeof(bigNumber)); // bigint

// 4. boolean -> represents true or false

let isLoggedIn = true;
console.log(isLoggedIn); // true

// 5. undefined -> a variable that has been declared but not assined a value
let k;
console.log(k); // undefined

// 6. represents intentional absence of any value

let empty = null;
console.log(empty); // null

// 7. Symbol -> unique and immutable value, often used as object keys
let id = Symbol("id");
console.log(id); // Symbol(id)

// 8. typeof undefind vs null
console.log(typeof undefind) // "undefined"
console.log(typeof null) // "object"

// Non-primitve(reference) Data Types -> stored by reference and can hold collections or more complex structures.

// 1. object -> collection of key-value pairs

let person = {name : "Alice", age: 25};

// 2. array -> ordered list of values

let fruits = ["apple", "banana", "cherry"];

// 3. function -> a block of code desined to perform a task

function greet(){
    console.log("Hello!");
}

greet();

// typeof Operator -> you can use typeof to check the datatype

console.log(typeof "hello")      // "string"
console.log(typeof 42)           // "number"
console.log(typeof true)        // "boolean"
console.log(typeof {})           // "object"
console.log(typeof [])           // "object"
console.log(typeof null)         // "object"
console.log(typeof undefined )   // "undefined"
console.log(typeof function(){}) // "function"

// let, var, and const are used to declare variables, but they differ in scope, hoisting and mutability

// 1. var(old)

/*
Function-scoped

Hoisted to the top of the function, but not initialized

Can be redeclared and updated
*/

function test() {
  console.log(x); // undefined (due to hoisting)
  var x = 10;
  console.log(x); // 10
}

test();

// isues with var

if (true) {
  var a = 5;
}
console.log(a); // 5 (no block scope)

// 2. let

/*

Block-scoped (only exists within { })

Hoisted, but not initialized (in Temporal Dead Zone until declaration)

Can be updated, but not redeclared in the same scope

*/

if (true) {
  let y = 20;
  console.log(y); // 20
}
// console.log(y); // ReferenceError: y is not defined


// 3. const

/*

Block-scoped

Must be initialized at the time of declaration

Cannot be reassigned, but objects/arrays can still be mutated
*/

/*
const z = 30;
z = 40; // ❌ Error: Assignment to constant variable

const person = { name: "Alice" };
person.name = "Bob"; // ✅ Allowed: internal mutation

*/
