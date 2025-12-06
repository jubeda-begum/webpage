let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let searchInput = document.getElementById("searchInput");
let taskList = document.getElementById("taskList");
let tasks = [];
const TASKS_KEY = "todo_tasks";
window.onload = function () {
    let saved = localStorage.getItem(TASKS_KEY);
    if (saved) {
        tasks = JSON.parse(saved);  
    }
    renderTasks(); 
};
function saveTasks() {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}
function renderTasks(filterText = "") {
    taskList.innerHTML = ""; 
    let search = filterText.toLowerCase();
    tasks.forEach(function (task) {
        if (!task.text.toLowerCase().includes(search)) {
            return;
        }
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = task.text;
        if (task.completed) {
            span.style.textDecoration = "line-through";
        }
        let completeBtn = document.createElement("button");
        completeBtn.textContent = task.completed ? "Unmark" : "Complete";
        completeBtn.onclick = function () {
            task.completed = !task.completed; 
            saveTasks();
            renderTasks(searchInput.value);
        };
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = function () {
            tasks = tasks.filter(function (item) {
                return item.id !== task.id;
            });
            saveTasks();
            renderTasks(searchInput.value);
        };
        li.appendChild(span);
        li.appendChild(document.createTextNode(" ")); 
        li.appendChild(completeBtn);
        li.appendChild(document.createTextNode(" "));
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}
addBtn.onclick = function () {
    let text = taskInput.value.trim();
    if (text === "") {
        alert("Task cannot be empty");
        return;
    }
    let newTask = {
        id: Date.now(),   
        text: text,
        completed: false
    };
    tasks.push(newTask);   
    saveTasks();           
    renderTasks(searchInput.value); 
    taskInput.value = "";  
};
searchInput.oninput = function () {
    let text = searchInput.value;
    renderTasks(text);
};
