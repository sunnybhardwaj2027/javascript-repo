let taskAdd = document.querySelector('.addTask');

taskAdd.addEventListener('click', function(){
    let task = document.querySelector('input');
    let li = document.createElement('li');
    let delBtn = document.createElement('button');
    li.innerText = task.value;
    let ul = document.querySelector('ul');
    delBtn.innerText = 'delete';
    li.appendChild(delBtn);

    ul.appendChild(li);
    task.value = '';
});