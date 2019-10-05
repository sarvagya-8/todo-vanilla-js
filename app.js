// load events in the page

document.querySelector("form").addEventListener("submit", submit);
document.getElementById("remove").addEventListener("click", clearList);
document.querySelector("ul").addEventListener("click", deleteOrTick);

// submit data function
function submit(event) {
    event.preventDefault();
    var taskList;
    var input = document.querySelector("input");
    if (input.value != "") addTask(input.value);
    input.value = "";
}

// add a task
function addTask(task) {
    var ul = document.querySelector("ul");
    var li = document.createElement("li");
    li.innerHTML = `<input type="checkbox"><span contenteditable="true">${task}</span><span style="float:right;" class="delete">×</span>`;
    ul.appendChild(li);
    document.querySelector(".tasksBoard").style.display = "block";
}

// clear the List
function clearList(event) {
    var ul = (document.querySelector("ul").innerHTML = "");
}

// delete tick
function deleteOrTick(event) {
    if (event.target.className == "delete") deleteTask(event);
    else {
        tickATask(event);
    }
}

// delete the task
function deleteTask(event) {
    var remove = event.target.parentNode;
    var parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}

// tick the task
function tickATask(event) {
    var task = event.target.nextSibling;

    if (event.target.checked) {
        task.style.textDecoration = "line-through";
        task.style.color = "rgb(0, 140, 255)";
    } else {
        task.style.textDecoration = "none";
        task.style.color = "#2f4f4f";
    }
}