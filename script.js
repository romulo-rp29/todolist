function newTask() {
  let li = document.createElement('li');
  let inputTask = document.getElementById('texto-tarefa').value;
  let task = document.createTextNode(inputTask);
  li.appendChild(task);
  if (inputTask === '') {
    null
  } else {
    document.getElementById('lista-tarefas').appendChild(li);
    li.classList.add('tarefaAdicionada')
    li.style.backgroundColor = 'blue'
  }
  document.getElementById("texto-tarefa").value = '';
  let selections = document.getElementById('lista-tarefas').children;
  for (let selection of selections) {
    selection.addEventListener('click',function(event){
      event.target.style.backgroundColor = 'rgb(128,128,128)'
    });
  }

  // function deselectTask(){
  //   if () {

  //   }
  // }
}

// let selections = document.getElementById('lista-tarefas').children;

// for (let selection of selections) {
   
//     selection.addEventListener('click',function(event){
//       event.target.style.backgroundColor = 'red'
//     });
// }
