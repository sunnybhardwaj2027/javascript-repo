let btn = document.querySelector('button');
btn.addEventListener('click', function(){
    let h3 = document.querySelector('h3');
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    btn.style.backgroundColor = randomColor;

    let div = document.querySelector('div');
    div.style.backgroundColor = randomColor;
    h3.style.color = randomColor;
    console.log("color updated");
});

function getRandomColor(){
    let red = Math.floor(Math.random()*255)+1;
    let green = Math.floor(Math.random()*255)+1;
    let blue = Math.floor(Math.random()*255)+1;

    let color = `rgb(${red}, ${green}, ${blue})`;

    return color;
}