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



    selection.addEventListener('click',function(event1){
      event1.target.classList.toggle('tarefa-selecionada')
    });



    // selection.addEventListener('click',function(event2){
    //   event2.target.style.backgroundColor = 'rgb(128,128,128)'
    //   event2.target.classList.toggle('tarefa-selecionada')
    // });
    selection.addEventListener('dblclick', function(event3){
      event3.target.classList.toggle('completed')
      event3.target.style.cssText = 'text-decoration: line-through solid rgb(0, 0, 0)'
    });
  }
}
document.addEventListener("keypress", function(event) {
  if(event.key === 'Enter') {
      let btn = document.querySelector("#criar-tarefa");
    btn.click();
  }
});