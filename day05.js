// js object literals => used to store keyed collections and complex entities. 
// properties => (key, value) pair => objects are a collection of properties

// creating object literals

const student = {
    name : "shradha",
    age : 23,
    marks : 94.4,
    city : "Delhi"
};
console.log(student); // { name: 'shradha', age: 23, marks: 94.4, city: 'Delhi' }
// note => generally we use const keyword for object literals

const item = {
    price : 100.99,
    discount : 50,
    colors : ["red", "pink"] // in value we can give array
};

console.log(item.colors); // [ 'red', 'pink' ]

// create a post -> create and object literal for the properties of thread/twitter post which includes

const post = {
    username : "@sunnykumar2027",
    content : "this is my #firstPost",
    likes : 23,
    reposts : 2,
    tags : ["@babitajee", "@anjalibhabhi"]
};


// get value
console.log(student["name"]); // shradha
console.log(student.name); // shradha

// mainly we use dot operator

// conversion in get values => js automatically converts objects keys to strings even if we made the number as key, the number will be converted to string.
const obj = {
    1 : 'a',
    2 : 'b',
    true : 'c',
    undefined : 'e'
};

console.log(obj["1"]);          // ✅ "a" — 1 is converted to "1"
console.log(obj[1]);            // ✅ "a" — 1 → "1", same result
console.log(obj["true"]);       // ✅ "c"
console.log(obj[true]);         // ✅ "c" — true → "true"
console.log(obj["undefined"]);  // ✅ "e"
console.log(obj[undefined]);    // ✅ "e" — undefined → "undefined"

// console.log(obj.1); // error


// add/update values
student.city = "mumbai"; // change the city to "mumbai"
student.gender = "female"; // added a new property
student.marks = "A"; // change the marks to 'A'
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

delete student.age;

console.log(student); // { name: 'shradha', marks: 'A', city: 'mumbai', gender: 'female' }

// object of object

const classInfo = {
    sunny : {
        grade : 'A',
        city : 'delhi'
    }, 
    shradha : {
        grade : 'O',
        city : 'pune'
    },
    nancy : {
        grade : 'O',
        city : 'mumbai'
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

console.log(classInfo.sunny); // { grade: 'A', city: 'delhi' }
console.log(classInfo.sunny.city); // delhi

// array of objects => storing information of multiple students.

const classInformation = [
    {
        name : "sunny",
        grade : "A",
        city : 'delhi'
    },
    {
        name : "shradha",
        grade : "O",
        city : "pune"
    },
    {
        name : "nancy",
        grade : "O",
        city : "mumbai"
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

console.log(classInformation[0]); // { name: 'sunny', grade: 'A', city: 'delhi' }
console.log(classInformation[0].name); // sunny
classInformation[1].gender = "female";
console.log(classInformation[1]); // { name: 'shradha', grade: 'O', city: 'pune', gender: 'female' }

// math object => in javascript there is allready a object called math in which there is so many properties and function is in form of key value pair available we can directly use those functiona and properties.

// properties
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

// functions 
console.log(Math.abs(-56)); // always give =ve output
console.log(Math.pow(2, 3)); // 8 
console.log(Math.floor(4.999)); // 4 => nearest smallest integer
console.log(Math.ceil(4.999)); // 5 => nearest largest integer
console.log(Math.random()); // this will give random value between 0 to 1(excluded)

// 1 to 10 random integers
let random = Math.floor(Math.random()*10) + 1;
console.log(random);