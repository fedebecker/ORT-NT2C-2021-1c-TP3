const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let contador = 0;
let noChequeados = 0;
let tareas = [];

class Tarea{
  constructor(nomTarea){
    this.nomTarea = nomTarea
    this.lista = false;
  }
  
}

function mostrar(){

  list.innerHTML = ""

  tareas.map((tarea)=>{

    const checkBox = document.createElement('input')
    const span = document.createElement ('span')
    const li = document.createElement('li')


    checkBox.type = "checkbox"
    checkBox.className = classNames.TODO_CHECKBOX
    checkBox.checked = tarea.lista 
    checkBox.onchange = cambioCheck.bind(tarea)


    span.className = classNames.TODO_TEXT
    span.innerHTML = tarea.nomTarea


    li.className = classNames.TODO_ITEM
    li.appendChild(span)
    li.appendChild(checkBox)


    list.appendChild(li)
  })

  itemCountSpan.innerHTML = tareas.length
  let checkeados = 0
  tareas.map((tarea)=>{
    if(tarea.lista)
      checkeados++
  })
  uncheckedCountSpan.innerHTML = tareas.length - checkeados

}

function cambioCheck(e){
  this.lista = e.target.checked
  mostrar()
}

function addTodo() {
  const nomTarea = prompt("Ingrese una tarea ")
  const tarea = new Tarea(nomTarea)
  tareas = [...tareas, tarea]
  mostrar()

}
