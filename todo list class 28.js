function addtask(){
    let taskinput = document.getElementById("taskinput");
    let task = taskinput.value.trim();
    
    if (task === ""){
        alert("please enter a task");
        return
    }

    let newtask = document.createElement("li");
    let tasktext = document.createElement("span");
    let editbutton = document.createElement("button");
    let deletebutton = document.createElement("button");
    tasktext.textContent = task;
    editbutton.textContent = "Edit";
    editbutton.className = "edit-btn";
    editbutton.onclick = function(){
        let updatedtask = prompt("Update your task:", tasktext.textContent);
        if (updatedtask === null){
            return;
        }

        updatedtask = updatedtask.trim();

        if (updatedtask === ""){
            alert("Task cannot be empty.");
            return;
        }

        tasktext.textContent = updatedtask;
    }

    deletebutton.textContent = "Delete";
    deletebutton.className = "delete-btn";
    deletebutton.onclick = function(){
        newtask.remove();
    }

    newtask.appendChild(tasktext);
    newtask.appendChild(editbutton);
    newtask.appendChild(deletebutton);
    document.getElementById("tasklist").appendChild(newtask);

    taskinput.value = "";

}


