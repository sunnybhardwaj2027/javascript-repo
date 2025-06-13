// ===============================
// String Methods
// ===============================

// Methods -> Actions that can be performed on objects (like strings, arrays, etc.)
// Syntax: stringName.method()

// 1. trim() method -> Removes whitespace from both ends of a string and returns a new string.
let msg = "      hello      ";
console.log(msg.trim()); // "hello"

// 2. Strings are immutable in JavaScript
// String values cannot be changed after creation.
// Any method that appears to modify a string actually returns a new string.

let str = "Random String";
console.log(str.toUpperCase()); // "RANDOM STRING"
console.log(str.toLowerCase()); // "random string"

// 3. String methods with arguments -> stringName.method(arg)

// indexOf() -> Returns the index of the first occurrence of the specified substring.
// Returns -1 if the substring is not found.
let s = "I Love Coding";
let ind = s.indexOf("Love");
console.log(ind); // 2

// 4. slice() method -> Extracts a section of a string and returns it as a new string.
// Takes two arguments: start index and (optional) end index (non-inclusive).
// Supports negative indices to count from the end.
let text = "JavaScript";
console.log(text.slice(0, 4));   // "Java"
console.log(text.slice(4));      // "Script"
console.log(text.slice(-6, -3)); // "Scr"

// 5. Method chaining -> Calling multiple methods one after another on the same string.
// Each method returns a new string, which the next method operates on.
console.log(msg.toUpperCase().trim()); // "HELLO"

// 6. replace() and repeat() methods

// replace() -> Searches for a substring and returns a new string with it replaced.
str = "I Love Coding";
let str2 = str.replace("Love", "do");
console.log(str);  // Original: "I Love Coding"
console.log(str2); // Modified: "I do Coding"

let str3 = str.replace("o", "x"); // only replaces first occurrence
console.log(str3); // "I Lxve Coding"

// repeat() -> Returns a new string with a specified number of copies of the original string.
str = "mango";
str2 = str.repeat(3);
console.log(str2); // "mangomangomango"

msg = "help!";
console.log(msg.toUpperCase()); // "HELP!"


// ===============================
// Array Basics
// ===============================

// An array is a linear collection of elements (can be of any type).

let students = ["sunny", "nancy", "babita"];
// Visualizing array:
// students[0] => "sunny", students[1] => "nancy", students[2] => "babita"

// Creating arrays
let info = ["shradha", 23, 98.9]; // mixed types
let names = ["shradha", "sunny", "nancy"];
let newArray = []; // empty array

// Arrays are mutable (can be changed)
let fruits = ["mango", "apple", "litchi"];
fruits[0] = "banana";
fruits[10] = "papaya"; // creates empty slots in between
console.log(fruits.length); // 11

// ===============================
// Basic Array Methods
// ===============================

// push -> Add to end
// unshift -> Add to start
// pop -> Remove from end and return it
// shift -> Remove from start and return it

let cars = ["audi", "bmw", "maruti", "xuv"];
cars.push("toyota");
console.log(cars.length, cars[4]); // 5, "toyota"

cars.push("ferrari");
console.log(cars.length, cars[5]); // 6, "ferrari"

let x = cars.pop();
console.log(x); // "ferrari"

// ===============================
// Practice Question
// ===============================
// Start: ["january", "july", "march", "august"]
// Final: ["july", "june", "march", "august"]

let arr = ["january", "july", "march", "august"];
arr.shift(); // remove "january"
arr.shift(); // remove "july"
arr.unshift("june");
arr.unshift("july");
console.log(arr); // [ 'july', 'june', 'march', 'august' ]

// ===============================
// More Array Methods
// ===============================

// indexOf -> Returns index of element, or -1 if not found
let primary = ["red", "yellow", "blue"];
console.log(primary.indexOf("yellow")); // 1
console.log(primary.indexOf("Yellow")); // -1 (case-sensitive)
console.log(primary.indexOf("green"));  // -1

// includes -> Checks if an element exists in the array (returns true/false)
console.log(primary.includes("yellow")); // true
console.log(primary.includes("green"));  // false

// concat -> Combines arrays and returns a new array
let secondary = ["orange", "green", "violet"];
newArray = primary.concat(secondary);
console.log(newArray); // [ 'red', 'yellow', 'blue', 'orange', 'green', 'violet' ]
console.log(primary);   // Unchanged
console.log(secondary); // Unchanged

// reverse -> Reverses array in-place
primary.reverse();
console.log(primary); // [ 'blue', 'yellow', 'red' ]

// slice -> Returns a shallow copy of part of an array into a new array
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors.slice());         // Copy all elements
console.log(colors.slice(2));        // From index 2 to end
console.log(colors.slice(2, 3));     // From index 2 to 3 (non-inclusive) → ['blue']
console.log(colors.slice(2, 2));     // Empty array []
console.log(colors.slice(-2));       // Last two elements → ['pink', 'white']


// ===============================
// splice() Method
// ===============================

// splice(start, deleteCount, item1, item2, ...)
// It modifies the original array by removing or replacing existing elements and/or adding new elements.

let nums = [10, 20, 30, 40, 50];

// Remove 2 elements from index 1
let removed = nums.splice(1, 2); 
console.log(nums);   // [10, 40, 50]
console.log(removed); // [20, 30]

// Add elements at index 1 without deleting
nums.splice(1, 0, 15, 25);
console.log(nums); // [10, 15, 25, 40, 50]

// Replace element at index 2
nums.splice(2, 1, 100);
console.log(nums); // [10, 15, 100, 40, 50]

// Real-life example: Inserting months
let months = ["jan", "march", "april"];
months.splice(1, 0, "feb");
console.log(months); // ['jan', 'feb', 'march', 'april']

// Replace 'march' with 'MAR'
months.splice(2, 1, "MAR");
console.log(months); // ['jan', 'feb', 'MAR', 'april']

// ===============================
// sort() Method
// ===============================

// The sort() method is used to sort elements of an array.

// Note: By default, sort() converts elements to strings and sorts them in lexicographical (dictionary) order.

fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // ["apple", "banana", "cherry"]

// Problem with default sort on numbers
nums = [100, 25, 3, 7];
nums.sort();
console.log(nums); // [100, 25, 3, 7] -> wrong because it's sorting them as strings

// Correct way to sort numbers in ascending order
nums.sort((a, b) => a - b);
console.log(nums); // [3, 7, 25, 100]

// Sort numbers in descending order
nums.sort((a, b) => b - a);
console.log(nums); // [100, 25, 7, 3]

// Sorting strings case-insensitively
names = ["Rahul", "aman", "Sunny"];
names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(names); // ["aman", "Rahul", "Sunny"]

// Summary:
// - Default sort() is for strings
// - Use (a, b) => a - b for numbers
// - Use localeCompare for case-insensitive sorting

console.log([1] == [1]); // false
console.log([1] === [1]); // false

arr = ['a', 'b', 'c'];
let arr2 = arr;

console.log(arr == arr2); // true
console.log(arr === arr2); // true

// note -> here both arr and arr2 are refer to same memory

// ===============================
// Array References in JavaScript
// ===============================

// Arrays are reference types in JavaScript.
// When you assign an array to another variable, you're copying the reference (not the actual array).

let arr1 = ["a", "b", "c"];
let arr2 = arr1; // arr2 points to the same array as arr1

arr2.push("d");
console.log(arr1); // ["a", "b", "c", "d"]
console.log(arr2); // ["a", "b", "c", "d"]

// ✅ Both arr1 and arr2 refer to the SAME array in memory.

// To create a copy of an array (a real duplicate), use slice() or spread operator:

// Using slice()
let original = ["x", "y", "z"];
let copy1 = original.slice();
copy1.push("new");
console.log(original); // ["x", "y", "z"]
console.log(copy1);    // ["x", "y", "z", "new"]

// Using spread operator (...)
let copy2 = [...original];
copy2.pop();
console.log(original); // ["x", "y", "z"]
console.log(copy2);    // ["x", "y"]

// Summary:
// - Direct assignment copies the reference (not the array itself).
// - To make a real copy, use slice() or spread (...).


// ===============================
// const with Arrays in JavaScript
// ===============================

// `const` means the variable reference cannot be reassigned.
// It does NOT mean the contents of the array are immutable.

// Example:
const fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits); // ["apple", "banana", "cherry"]

// ✅ You CAN modify (push, pop, change elements) in a const array
fruits[0] = "mango";
console.log(fruits); // ["mango", "banana", "cherry"]

// ❌ You CANNOT reassign the variable to a new array
// fruits = ["grape", "orange"]; // ❌ Error: Assignment to constant variable

// Summary:
// - const prevents reassignment of the array variable
// - You CAN change the contents (add, remove, update elements)
// - Use const when you don’t plan to reassign the whole array, but still want to modify it

// Tip: const is preferred for arrays and objects unless you plan to reassign the variable


nums = [[1, 2], [3, 4], [4, 5]]; // multi-dimensional arrays
