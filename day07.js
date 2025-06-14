// 'this' in javascript

// 'this' => refers to an object that is executing the current piece of code

const student = {
    name : 'sunny',
    age : '22',
    eng : 23,
    math : 25,
    phy : 53,
    getAvg(){
        console.log(this); // student => because getAvg will getting executed because of student object
        let avg = (this.eng + this.math + this.phy)/3; // if you have written end instead of this.eng the it would have given error
        console.log(`${this.name} got avg margks = ${avg}`);
    }
};

console.log(student.getAvg());
/*
{
  name: 'sunny',
  age: '22',
  eng: 23,
  math: 25,
  phy: 53,
  getAvg: [Function: getAvg]
}
sunny got avg margks = 33.666666666666664
*/

// another ex:-

function getAvg(){
    console.log(this);
}

console.log(getAvg()); // window object => because this code is getting executed window.getAvg() that's why window is output.

// try and catch => this try statement allows you to define a block of code to be tested for errors while it is being executed and catch statement allows you to define a block of code to be executed, if and error occurs in the try block.

// let a = 10;
try{
    console.log(a);
} catch {
    console.log("variable a doesn't defined");
}

// miscellaneous topics

// arrow functions => const func = (arg1, arg2) => {function definition}

const sum = (a,b) => {
    console.log(a + b);
}

const cube = n => { // if there is 1 argument then parenthesis besides arguments is optional but if there is 0, 2 or more than two arguments then it's compulsory you have to use parenthesis.
    return n*n*n;
}

const pow = (a, b) => {
    return a**b;
}

sum(2,5);
console.log(cube(3));
console.log(pow(2, 5));

// arrow function(implicit return) => in this case function is not going to print anything or return anything there will be a single value it will return itself.
// const func = (arg1, arg2, arg3, ...) => (value);

const sum1 = (a,b) => a+b;
const cube1 = a => a*a*a;

console.log(sum1(2,55));
console.log(cube(5));