<<<<<<< HEAD
document.addEventListener("DOMContentLoaded",()=>{

const todoInput=document.getElementById("todo-input");
const addTaskBtn=document.getElementById("add-task-btn");
const todoList=document.getElementById("todo-list");

let tasks=JSON.parse( localStorage.getItem('tasks')) || [];

tasks.forEach(task=>renderTask(task));

addTaskBtn.addEventListener("click",function(){
  const taskText=  todoInput.value.trim();
  if(taskText==="") return;

  const newTask={
    id:Date.now(),
    text:taskText,
    completed:false
  }
  tasks.push(newTask);
  saveTasks();
  renderTask(newTask);
  todoInput.value=""; //clear input
});

function renderTask(task){
    const li=document.createElement('li');
    li.setAttribute('data-id',task.id);
    if(task.completed) li.classList.add('completed');
    li.innerHTML=`
    <span>${task.text}</span>
    <button>Delete</button>
    `;
    li.addEventListener("click",(e)=>{
        if(e.target.tagName==="BUTTON") return;
        task.completed = !task.completed;
        li.classList.toggle("completed");
        saveTasks();

    })
li.querySelector("button").addEventListener("click",(e)=>{
    e.stopPropagation();
    tasks=tasks.filter((t)=> t.id !== task.id);
    li.remove();
    saveTasks();
})
todoList.appendChild(li);
}
function saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
=======
document.addEventListener("DOMContentLoaded",()=>{

const todoInput=document.getElementById("todo-input");
const addTaskBtn=document.getElementById("add-task-btn");
const todoList=document.getElementById("todo-list");

let tasks=JSON.parse( localStorage.getItem('tasks')) || [];

tasks.forEach(task=>renderTask(task));

addTaskBtn.addEventListener("click",function(){
  const taskText=  todoInput.value.trim();
  if(taskText==="") return;

  const newTask={
    id:Date.now(),
    text:taskText,
    completed:false
  }
  tasks.push(newTask);
  saveTasks();
  renderTask(newTask);
  todoInput.value=""; //clear input
});

function renderTask(task){
    const li=document.createElement('li');
    li.setAttribute('data-id',task.id);
    if(task.completed) li.classList.add('completed');
    li.innerHTML=`
    <span>${task.text}</span>
    <button>Delete</button>
    `;
    li.addEventListener("click",(e)=>{
        if(e.target.tagName==="BUTTON") return;
        task.completed = !task.completed;
        li.classList.toggle("completed");
        saveTasks();

    })
li.querySelector("button").addEventListener("click",(e)=>{
    e.stopPropagation();
    tasks=tasks.filter((t)=> t.id !== task.id);
    li.remove();
    saveTasks();
})
todoList.appendChild(li);
}
function saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
>>>>>>> b7a0c6352471123da59dafb20c4214442ce7639c
})