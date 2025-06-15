// forEach() in JavaScript

// forEach() => method used to execute a function on each element of an array
// it does NOT return anything (undefined), and does NOT change the original array

// Syntax:
/*
array.forEach((element, index, array) => {
    // code to execute for each element
});
*/

// Parameters:
// - element => current element being processed
// - index (optional) => index of the current element
// - array (optional) => the full array being traversed

let arr = [1, 2, 3, 4, 5];

let print = function(el){
    console.log(el);
}

arr.forEach(print);
/*
1 
2
3
4
5
*/

arr.forEach(function(el){
    console.log(el);
});
/*1
2
3
4
5
*/

arr.forEach((el) => {
    console.log(2*el);
});

/*
2
4
6
8
10
*/

let arr2 = [
    {
        name : 'sunny',
        marks : 97,
    },
    {
        name : 'nancy',
        marks : 100,
    },
    {
        name : 'shradha',
        marks : 98,
    }
];

arr2.forEach((student) => {
    console.log(student.marks);
});

/*
97
100
98
*/

// map() in JavaScript

// map() => used to create a new array by applying a function to each element of the original array
// it returns a new array with transformed elements, WITHOUT modifying the original array

// Syntax:
/*
const newArray = array.map((element, index, array) => {
    // return new value for each element
});
*/

// Parameters:
// - element => current element being processed
// - index (optional) => index of the current element
// - array (optional) => the full array being traversed

// Example 1: basic usage
const nums = [1, 2, 3, 4, 5];

const double = nums.map((num) => {
    return num * 2;
});

console.log(double); // [2, 4, 6, 8, 10]
console.log(nums);   // original array is unchanged

// Example 2: using index
const words = ["hi", "hello", "welcome"];

const indexed = words.map((word, i) => {
    return `${i}: ${word}`;
});

console.log(indexed); // ["0: hi", "1: hello", "2: welcome"]

// Example 3: concise version using arrow function (implicit return)
const square = nums.map(n => n * n);
console.log(square); // [1, 4, 9, 16, 25]

// Notes:
// - map() always returns a NEW array
// - does not change the original array
// - good for transforming data (e.g., formatting, calculating values)
// - each element’s returned value is pushed into the new array
// - great alternative to loops when you want to build a new array


// Array Methods in JavaScript

// 1. filter()

// filter() => creates a new array with elements that pass the test (return true)
// it does NOT change the original array

// Syntax:
/*
const newArray = array.filter((element, index, array) => {
    return condition;
});
*/

const nums1 = [1, 2, 3, 4, 5, 6];
const even = nums1.filter(n => n % 2 === 0);
console.log(even); // [2, 4, 6]

// -------------------------------------------

// 2. every()

// every() => checks if ALL elements in the array pass the test
// returns true or false

// Syntax:
/*
const result = array.every((element, index, array) => {
    return condition;
});
*/

const ages = [18, 22, 25, 30];
const allAdults = ages.every(age => age >= 18);
console.log(allAdults); // true

const mixAges = [18, 22, 16, 30];
console.log(mixAges.every(age => age >= 18)); // false

// -------------------------------------------

// 3. some()

// some() => checks if AT LEAST ONE element passes the test
// returns true or false

// Syntax:
/*
const result = array.some((element, index, array) => {
    return condition;
});
*/
const hasTeen = mixAges.some(age => age < 18);
console.log(hasTeen); // true

const allBig = [50, 60, 70];
console.log(allBig.some(n => n < 30)); // false

// -------------------------------------------

// 4. reduce()

// reduce() => reduces array to a single value
// it applies a function to accumulate values from left to right

// Syntax:
/*
const result = array.reduce((accumulator, currentValue, index, array) => {
    return updatedAccumulator;
}, initialValue);
*/

// Example 1: sum of array
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(sum); // 15

// Example 2: find max value
const max = numbers.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
}, numbers[0]);

console.log(max); // 5

// Notes:
// - filter() returns array
// - every() returns boolean
// - some() returns boolean
// - reduce() returns a single value (number, object, etc.)
// - reduce() is powerful for totals, averages, object grouping, etc.
