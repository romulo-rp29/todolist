function newTask() {
  
  let li = document.createElement('li');
  let inputTask = document.getElementById('texto-tarefa').value;
  let task = document.createTextNode(inputTask);
  li.appendChild(task);
  if (inputTask === '') {
    null
  } else {
    document.getElementById('lista-tarefas').appendChild(li);
    li.classList.add('tarefa-adicionada')
    li.style.backgroundColor = 'white'
  }
  document.getElementById("texto-tarefa").value = '';
  let selections = document.getElementById('lista-tarefas').children;
  for (let selection of selections) {
    selection.addEventListener('click',function(event){
      event.target.style.backgroundColor = 'rgb(128,128,128)'
      event.target.classList.add('tarefa-selecionada')
    });
    selection.addEventListener('dblclick', function(event){
      event.target.classList.add('completed')
      document.querySelector('.completed').style.cssText = 
      'text-decoration: line-through solid rgb(0, 0, 0)'
    });
  }
}
document.addEventListener("keypress", function(event) {
  if(event.key === 'Enter') {
      let btn = document.querySelector("#criar-tarefa");
    btn.click();
  }
});
function clearTasks() {
  let tasksList = document.querySelector('#lista-tarefas');
  tasksList.innerHTML = '';
}
function clearCompleted(){
  let completed = document.getElementsByClassName('completed');
  while(completed.length > 0){
      completed[0].parentNode.removeChild(completed[0]);
  }
}