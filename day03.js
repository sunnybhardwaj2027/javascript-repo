// String Methods

// Methods -> Actions that can be performed on objects (like strings, arrays, etc.)
// Syntax: stringName.method()

// 1. trim() method -> Removes whitespace from both ends of a string and returns a new string.

let msg = "      hello      ";
console.log(msg.trim()); // "hello"

// 2. Strings are immutable in JavaScript
// This means that string values cannot be changed after creation.
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
// It takes two arguments: start index and (optional) end index (non-inclusive).
// Supports negative indices to count from the end.

let text = "JavaScript";
console.log(text.slice(0, 4));   // "Java"
console.log(text.slice(4));      // "Script"
console.log(text.slice(-6, -3)); // "Scr"

// 5. Method chaining -> Calling multiple methods one after another on the same string.
// Each method returns a new string, which the next method operates on.

console.log(msg.toUpperCase().trim()); // "HELLO"
