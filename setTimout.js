// setTimeout() => used to run a function after a specified delay (in ms)

// Syntax:
// setTimeout(function, delay, param1, param2, ...);

// Parameters:
// - function => the function to execute
// - delay => time in milliseconds (1000 ms = 1 second)
// - param1, param2, ... => (optional) parameters passed to the function

// Example 1: basic usage
console.log("Start");

setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);

console.log("End");
// Output:
// Start
// End
// Executed after 2 seconds

// Example 2: passing a function reference
function greet() {
    console.log("Hello after 3 seconds!");
}

setTimeout(greet, 3000);

// Example 3: passing parameters
function greetUser(name) {
    console.log("Hello, " + name + "!");
}

setTimeout(greetUser, 1000, "Sunny");  // Hello, Sunny!

// Cancel setTimeout using clearTimeout()
const timeoutID = setTimeout(() => {
    console.log("This won't run");
}, 5000);

clearTimeout(timeoutID); // cancels the timeout before it runs

// Notes:
// - setTimeout runs only once after the delay
// - it is asynchronous => doesn't block the main thread
// - use setInterval() to run repeatedly at intervals
