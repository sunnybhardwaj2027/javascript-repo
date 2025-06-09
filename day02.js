//1. console.log() -> to write(log) a message on the console

/*

//2. 🔗 Linking JavaScript to HTML

// ➤ Use the <script> tag to connect your JS file to an HTML file.

// ✅ Best Practice: Place it just before </body> for proper loading.

<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>My JS Page</title>
</head>
<body>
  <h1>Hello World</h1>

  <!-- Linking external JavaScript file -->
  <script src="script.js"></script>
</body>
</html>

// ✅ OR: You can also put <script> in <head> with the "defer" attribute

<head>
  <script src="script.js" defer></script>
</head>

// 🗂 File Structure Example:
// project-folder/
// ├── index.html
// └── script.js

// 🚫 Common Mistakes to Avoid:
// - Wrong path in src → check folder & file name carefully
// - Using <script> in <head> without "defer"
// - Typo in file extension or script tag

// ✅ script.js example:
console.log("JS file linked successfully!");

*/

// 3. 🧩 Template Literals in JavaScript

// ➤ Template literals allow embedding variables and expressions inside strings
// ➤ Use backticks (` `) instead of single (' ') or double (" ") quotes

// ✅ Syntax:
let name = "Alice";
let age = 25;

let message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message); // "Hello, my name is Alice and I am 25 years old."

// ✅ Multi-line Strings:
let multiline = `This is line 1
This is line 2
This is line 3`;

console.log(multiline);

// ✅ Expression Evaluation:
let a = 10;
let b = 20;

console.log(`The sum of ${a} and ${b} is ${a + b}`); // "The sum of 10 and 20 is 30"

// ✅ Useful for: string formatting, multi-line text, cleaner code


// 🧩 Difference between == and ===

// ➤ == (Loose Equality) – Compares values after type coercion
// It converts the operands to the same type before making the comparison.

console.log(5 == "5");     // true (string "5" is coerced to number 5)
console.log(true == 1);    // true (true is coerced to 1)
console.log(null == undefined); // true (special case)

// ➤ === (Strict Equality) – Compares both values and types without type coercion

console.log(5 === "5");    // false (different types: number vs string)
console.log(true === 1);   // false (different types: boolean vs number)
console.log(null === undefined); // false (different types)

// ✅ Use === when you want to ensure both value and type are the same.

/*

==: Compares values after type coercion (converts types if needed).

===: Compares both value and type exactly, without type coercion.

*/

// ✅ Truthy & Falsy in JavaScript

// In JavaScript, every value is either "truthy" or "falsy" when used in a boolean context (like in if conditions).

// 🔸 Falsy Values (treated as false in conditionals):

// These 6 values are falsy:
false
0
-0
0n        // BigInt zero
""        // empty string
null
undefined
NaN

// Example:
if (0) {
  console.log("This won't run"); // 0 is falsy
}

if ("") {
  console.log("This won't run"); // empty string is falsy
}

// 🔸 Truthy Values (everything else):

// Any value that is not falsy is truthy.
// Examples:

/*
"hello"     // non-empty string
42          // non-zero number
[]          // empty array
{}          // empty object
"false"     // non-empty string (still truthy)
Infinity    // also truthy
*/

if ("hello") {
  console.log("This will run"); // truthy
}

if ([]) {
  console.log("Even an empty array is truthy");
}

if ({}) {
  console.log("Empty object is also truthy");
}


// 🛠️ console.warn() & console.error() in JavaScript

// ✅ console.warn()
// ➤ Used to display **warnings** in the browser console.
// ➤ Typically shows a yellow warning icon or style (depends on browser).

console.warn("This is a warning message");
// Use it to warn about potential issues or deprecated usage.

// ✅ console.error()
// ➤ Used to display **error messages** in the console.
// ➤ Shows a red error icon/message (more serious).

console.error("This is an error message");
// Use it when something has gone wrong (e.g., failed API, missing data, etc.)

// 📝 These methods are useful for debugging, especially in development.

// 🔔 Alerts, Prompts, and Confirms in JavaScript

// ✅ alert()
// ➤ Displays a simple message box to the user.
// ➤ User must press "OK" to continue.

alert("This is an alert box!");

// ✅ prompt()
// ➤ Displays a dialog box asking the user to input some text.
// ➤ Returns the input as a string. If "Cancel" is clicked, returns null.

let namex = prompt("What is your name?");
console.log("User entered:", namex);

// ✅ confirm()
// ➤ Asks the user to confirm something (OK/Cancel).
// ➤ Returns true if "OK" is clicked, false if "Cancel".

let isSure = confirm("Are you sure you want to delete this?");
console.log(isSure); // true or false
