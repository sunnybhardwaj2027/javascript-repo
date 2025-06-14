// JS Object Literals => Used to store keyed collections and complex entities.
// Properties => Key-value pairs => Objects are a collection of properties.

// Creating object literals

const student = {
    name: "shradha",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};

console.log(student); // { name: 'shradha', age: 23, marks: 94.4, city: 'Delhi' }
// Note: We generally use the `const` keyword for object literals to prevent reassignment.

// Object with different value types

const item = {
    price: 100.99,
    discount: 50,
    colors: ["red", "pink"] // Values can be arrays, other objects, etc.
};

console.log(item.colors); // [ 'red', 'pink' ]

// Twitter/thread-like post object

const post = {
    username: "@sunnykumar2027",
    content: "this is my #firstPost",
    likes: 23,
    reposts: 2,
    tags: ["@babitajee", "@anjalibhabhi"]
};

// Accessing values from objects

console.log(student["name"]); // shradha
console.log(student.name);    // shradha

// Note: Dot notation is preferred unless the key is dynamic or not a valid identifier.

// Object key conversion behavior in JavaScript

const obj = {
    1: 'a',
    2: 'b',
    true: 'c',
    undefined: 'e'
};

console.log(obj["1"]);          // "a" — number key 1 becomes string "1"
console.log(obj[1]);            // "a"
console.log(obj["true"]);       // "c"
console.log(obj[true]);         // "c"
console.log(obj["undefined"]);  // "e"
console.log(obj[undefined]);    // "e" — becomes the string "undefined"

// console.log(obj.1); ❌ Invalid syntax (dot notation cannot be used with number keys)

// Adding / Updating values in an object

student.city = "mumbai";        // Update value
student.gender = "female";      // Add new key
student.marks = "A";            // Change data type (number → string)
console.log(student);

/*
{
  name: 'shradha',
  age: 23,
  marks: 'A',
  city: 'mumbai',
  gender: 'female'
}
*/

// Deleting properties

delete student.age;
console.log(student); // { name: 'shradha', marks: 'A', city: 'mumbai', gender: 'female' }

// Object of Objects

const classInfo = {
    sunny: {
        grade: 'A',
        city: 'delhi'
    },
    shradha: {
        grade: 'O',
        city: 'pune'
    },
    nancy: {
        grade: 'O',
        city: 'mumbai'
    }
};

console.log(classInfo);
/*
{
  sunny: { grade: 'A', city: 'delhi' },
  shradha: { grade: 'O', city: 'pune' },
  nancy: { grade: 'O', city: 'mumbai' }
}
*/

console.log(classInfo.sunny);       // { grade: 'A', city: 'delhi' }
console.log(classInfo.sunny.city);  // delhi

// Array of Objects — Storing multiple entities in an array

const classInformation = [
    {
        name: "sunny",
        grade: "A",
        city: 'delhi'
    },
    {
        name: "shradha",
        grade: "O",
        city: "pune"
    },
    {
        name: "nancy",
        grade: "O",
        city: "mumbai"
    }
];

console.log(classInformation);

/*
[
  { name: 'sunny', grade: 'A', city: 'delhi' },
  { name: 'shradha', grade: 'O', city: 'pune' },
  { name: 'nancy', grade: 'O', city: 'mumbai' }
]
*/

console.log(classInformation[0]);         // { name: 'sunny', grade: 'A', city: 'delhi' }
console.log(classInformation[0].name);    // sunny

classInformation[1].gender = "female";    // Adding a property to a specific object
console.log(classInformation[1]);         // { name: 'shradha', grade: 'O', city: 'pune', gender: 'female' }

// Math Object => JavaScript has a built-in `Math` object with many useful properties and methods

// Properties
console.log(Math.PI); // 3.141592653589793
console.log(Math.E);  // 2.718281828459045

// Functions
console.log(Math.abs(-56));       // 56 (absolute value)
console.log(Math.pow(2, 3));      // 8 (2 raised to power 3)
console.log(Math.floor(4.999));   // 4 (rounds down)
console.log(Math.ceil(4.001));    // 5 (rounds up)
console.log(Math.random());       // Random value between 0 (inclusive) and 1 (exclusive)

// Random integer from 1 to 10
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);
