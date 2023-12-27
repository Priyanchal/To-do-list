const newTaskInput=document.getElementById("newTask")
const addTaskButton=document.getElementById("addTask")
const taskList=document.getElementById("taskList")

addTaskButton.addEventListener("click", addTask)

function addTask(){
    const taskText=newTaskInput.value.trim();
    if(taskText !== ""){
        const taskItem=document.createElement("li");
        taskItem.textContent=taskText;

        const deleteButton=document.createElement("button");
        deleteButton.textContent="Delete"
        deleteButton.addEventListener("click", deleteTask)

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem)

        newTaskInput.value = "";
    }
}

function deleteTask(event){
    const taskItem=event.target.parentElement;
    taskList.removeChild(taskItem)
}

taskList.addEventListener("click",toggleTask)

function toggleTask(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("completed")
    }
}