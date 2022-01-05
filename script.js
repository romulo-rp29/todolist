function newTask() {
    let li = document.createElement("li");
    let inputTask = document.getElementById("texto-tarefa").value;
    let task = document.createTextNode(inputTask);
    li.appendChild(task);
    if (inputTask === "") {
        null
    } else {
      document.getElementById("lista-tarefas").appendChild(li);
    }
    document.getElementById("texto-tarefa").value = "";
}