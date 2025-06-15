// setInterval() => used to repeatedly run a function at a specified interval (in ms)

// Syntax:
// setInterval(function, interval, param1, param2, ...);

// Parameters:
// - function => the function to execute repeatedly
// - interval => time in milliseconds between each call
// - param1, param2, ... => (optional) parameters passed to the function

// Example 1: basic usage
setInterval(() => {
    console.log("Repeats every 2 seconds");
}, 2000);

// Example 2: passing a function reference
function showTime() {
    console.log("Current time: " + new Date().toLocaleTimeString());
}

setInterval(showTime, 1000); // prints time every 1 second

// Example 3: passing parameters
function greetUser(name) {
    console.log("Hello, " + name + "!");
}

setInterval(greetUser, 3000, "Sunny"); // Hello, Sunny! every 3 seconds

// Stop setInterval using clearInterval()
const intervalID = setInterval(() => {
    console.log("This will stop in 5 seconds");
}, 1000);

setTimeout(() => {
    clearInterval(intervalID);
    console.log("Interval cleared");
}, 5000);

// Notes:
// - setInterval runs the function repeatedly at given intervals
// - it is asynchronous => doesn't block other code
// - use clearInterval(id) to stop it manually
// - can be used with setTimeout to stop after some time
