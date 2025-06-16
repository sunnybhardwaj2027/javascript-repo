// DOM events
// events => Events are signals that something has occurred on the webpage, usually as a result of user interaction like clicking, typing, or moving the mouse.

// onclick => Triggered when an element is clicked.
// onmouseenter => Triggered when the mouse pointer enters the element area.

let btn = document.querySelector('button');
console.dir(btn); // Displays the properties of the button object in the console.

btn.onclick = function() {
    console.log("button was clicked and this message is printed because of javascript code."); 
    // Note: If the same button also has an `onclick` attribute in HTML, this JS code will override that one.
}

// Another way to assign event handler using a named function

function sayHello() {
    console.log('say Hello!');
}

btn.onclick = sayHello; // Assigns function reference (doesn't call immediately)

// onmouseenter => Executes when the mouse enters the button area

btn.onmouseenter = function(){
    btn.style.color = 'red';
    btn.style.backgroundColor = 'gray';
    // Text becomes red and background gray on mouse hover.
}

// onmouseleave => Executes when the mouse leaves the element area

btn.onmouseleave = () => {
    btn.style.color = 'black';
    btn.style.backgroundColor = 'white';
    // Resets color and background when the mouse exits the button.
}

// note => You can add multiple event listeners to a single element using addEventListener()
// But with onclick/onmouseenter properties, the latest one will override the previous.

let p = document.querySelector('p');
p.addEventListener('click', function(){
    console.log('Paragraph was clicked!');
    p.style.color = 'red';
    // Changes paragraph color on click
});

let box = document.querySelector('.box');
box.addEventListener('mouseenter', function(){
    console.log('mouse entered in box');
    box.innerText = 'mouse entered in box';
    // Updates box content on hover
});

// 'this' in event listener
// When using a regular function as the event callback, 'this' refers to the element on which the event was triggered.

let btn2 = document.querySelector('.btn');
btn2.addEventListener('click', function(){
    console.dir(this.innerText); // Logs the button's text
    this.style.backgroundColor = 'blue'; // Changes button background color
});

// keyboard events

// addEventListener automatically passes an event object as an argument to the callback
// This object contains information about the event (e.g., which key was pressed, mouse position, etc.)

let newBtn = document.querySelector('.newbtn');
newBtn.addEventListener('click', function(event){
    console.log(event); // Full details of the mouse event (e.g., pointerId, clientX, etc.)
    console.log('new button was clicked');
});

let input = document.querySelector('input');
input.addEventListener('keydown', function(event){
    console.log(event); // Full details of the keyboard event

    console.log('key = ', event.key); // The key value (e.g., 'a', 'Enter', etc.)
    console.log('code = ', event.code); // The physical key location on keyboard (e.g., 'KeyA', 'Enter')
    console.log('key was pressed');
});

// form events

let form = document.querySelector('form');
form.addEventListener('submit', function(event){
    event.preventDefault(); 
    // Prevents the default form submission (which reloads the page or redirects)
    console.log('event submitted');
});

let form2 = document.querySelector('.form2');
form2.addEventListener('submit', function(){
    event.preventDefault(); 
    // Stops page from refreshing on form submission

    let ip = document.querySelector('#user');
    let pass = document.querySelector('#pass');

    console.log(ip); // Logs input element
    console.log(ip.value); // Logs entered username
    console.log(pass.value); // Logs entered password

    console.log(`Hi, ${ip.value} your password is set to be ${pass.value}`);
    console.dir(form2); // Logs the entire form element
});

// more events
// change event => Fires when the input value is changed and focus is lost (i.e., when the user clicks away from the input box).
// Works on <input>, <select>, and <textarea>

let inp = document.querySelector('#move');
inp.addEventListener('change', function(){
    console.log("change event");
    console.log('final value = ', this.value); // Shows final value after focus is lost
});

// input event => Fires every time the value of the input changes (character by character)
// Tracks changes in real-time

inp.addEventListener('input', function(){
    console.log('input event');
    console.log('final value = ', this.value); // Real-time logging of input value
});
