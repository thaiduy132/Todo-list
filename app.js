'use strict'
//Variables

const addTask=document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

addTask.addEventListener('click',function(){
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerHTML = `${inputTask.value}`;
    task.appendChild(li);

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('delete-btn')
    task.appendChild(deleteButton)

    let checkedButton = document.createElement('button');
    checkedButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkedButton.classList.add('checked-btn')
    task.appendChild(checkedButton)

    if(inputTask.value === ""){
        alert("Please enter value");
    }else
    taskContainer.appendChild(task)

    deleteButton.addEventListener("click",function(){
        deleteButton.parentElement.remove();
    })    

    console.log(checkedButton.parentElement)
    checkedButton.addEventListener("click",function(){
        checkedButton.parentElement.style.textDecoration = 'line-through'
    })

});


