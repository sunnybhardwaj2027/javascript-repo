// DOM => Document Object Model
// In simple terms, every HTML element is represented as an object in a tree-like structure.
// Each element (node) is connected in this structure, allowing us to access and manipulate them using JavaScript.

// 1. DOM represents the structure of an HTML document as a tree of nodes.
// 2. It allows dynamic manipulation of the webpage (content, structure, and styling).

// Note: Every HTML element is a node, and every node is an object in JavaScript.

// When we add a JS file, the entire HTML and CSS content is represented as the `document` object.
// We can use JavaScript to manipulate this `document`.

// ========================
// Selecting Elements
// ========================

// 1. getElementById => returns a single element (object) or null if not found
let imgObj = document.getElementById("mainImg");
console.log(imgObj); // Logs the image element
console.dir(imgObj); // Logs the element as a JS object with properties and methods

console.log(imgObj.src); // Logs the 'src' attribute of the image
console.log(imgObj.id);  // Logs the 'id' of the element

// 2. getElementsByClassName => returns an HTMLCollection of matching elements
// HTMLCollection is array-like but does not support array methods
let smallImages = document.getElementsByClassName("oldImg");
console.log(smallImages); // HTMLCollection of <img> elements with class 'oldImg'
console.dir(smallImages);
console.dir(smallImages[0]);
console.log(smallImages[0].src); // Logs 'src' of the first image

console.log(document.getElementsByClassName("abcd")); // Empty collection (no element with class 'abcd')

// 3. getElementsByTagName => returns all elements of a given tag as an HTMLCollection
let para = document.getElementsByTagName("p");
console.log(para);
console.dir(para);
// para[0].innerText = "hi"; // Updates text of the first <p> element

// 4. querySelector => selects the first element matching a CSS selector
document.querySelector('p'); // First <p> element
document.querySelector('#myId'); // Element with id="myId"
document.querySelector('.myClass'); // First element with class="myClass"

// 5. querySelectorAll => selects all elements matching a CSS selector
let paragraph = document.querySelectorAll('p'); // All <p> elements
console.dir(paragraph); // NodeList

document.querySelectorAll('div a'); // All <a> tags inside <div> elements

// Note: CSS-style selectors are used in querySelector/querySelectorAll

// ========================
// Text and HTML Content
// ========================

// innerText => Gets/sets the visible text of an element
// textContent => Gets/sets the full text, including hidden text
// innerHTML => Gets/sets the full HTML including tags

let heading = document.querySelector('h1');
heading.innerText = 'i am peter parker'; // Updates text content
// heading.innerText = '<b> i am peter parker </b>'; // Displays as plain text, not bold
heading.innerHTML = `<u> ${heading.innerText} </u>`; // Underlines the text

// ========================
// Attributes
// ========================

// getAttribute(attr) => gets the value of an attribute
// setAttribute(attr, val) => sets the value of an attribute

console.log(imgObj.getAttribute('id')); // "mainImg"
imgObj.setAttribute('class', 'profile_picture');
console.log(imgObj.getAttribute('class')); // "profile_picture"

// ========================
// Styling
// ========================

heading.style.color = 'red'; // Applies red color to <h1>

let parah = document.querySelectorAll('p');
for (para of parah) {
    para.style.color = 'green'; // Applies green color to all <p> tags
}

// ========================
// classList => for manipulating classes
// ========================

let headClass = document.querySelector('h1');
console.dir(headClass.classList); // DOMTokenList of class names

headClass.classList.add('green');      // Adds class "green"
headClass.classList.add('underline');  // Adds class "underline"
console.dir(headClass.classList);

headClass.classList.remove('green');   // Removes class "green"
console.dir(headClass.classList);

headClass.classList.contains('green');     // false
headClass.classList.contains('underline'); // true

headClass.classList.toggle('green');    // Adds "green" if not present, removes it if present
headClass.classList.toggle('underline'); // Toggles "underline" class

// ========================
// Navigation
// ========================

let h3 = document.querySelector('div h3');
console.log(h3.parentElement); // Logs parent element (div)

let div = document.querySelector('div');
console.log(div.children); // Logs HTMLCollection of children (h3, p)
console.log(div.childElementCount); // Number of child elements
console.log(h3.children); // Empty HTMLCollection (no children)

let divP = document.querySelector('div p');
console.log(divP.previousElementSibling); // Logs the <h3> before this <p>
divP.previousElementSibling.style.color = 'pink'; // Colors the previous sibling

// ========================
// Creating and Adding Elements
// ========================

let newP = document.createElement('p'); // Creates a <p> element
newP.innerText = "Hi, i am new p";

let body = document.querySelector('body');
body.appendChild(newP); // Appends <p> to body
newP.style.color = "blue";

let box = document.querySelector('.box');
box.appendChild(newP); // Moves <p> inside .box

let btn = document.createElement('button');
btn.innerText = 'click me!';
box.appendChild(btn);
btn.style.backgroundColor = 'gray';
btn.style.color = 'red';

newP.append(" this is added text"); // Adds text at the end of <p>
newP.append(btn); // Moves button inside <p>
newP.append(" don't click on this button!"); // Adds more text

box.prepend(newP); // Moves <p> to the start of .box

let p1 = document.querySelector('p');
p1.insertAdjacentElement('beforebegin', btn); // Adds button before <p>
p1.insertAdjacentElement('afterbegin', btn);  // Adds button inside <p>, at the beginning
p1.insertAdjacentElement('beforeend', btn);   // Adds button at end inside <p>
p1.insertAdjacentElement('afterend', btn);    // Adds button after <p>

// ========================
// Removing Elements
// ========================

// removeChild(element) => removes a child from its parent
// remove() => directly removes the element

body.removeChild(btn); // Removes button from body (if it's a child)
p1.insertAdjacentElement('afterend', btn); // Re-adds it after <p>
btn.remove(); // Removes the button
