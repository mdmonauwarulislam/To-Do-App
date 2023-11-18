let todoList = JSON.parse(localStorage.getItem('ToDoListLast')) || [];
displayTodos();

function addTodo() {
    let inputElement = document.querySelector('#todo');
    let inputDate = document.querySelector('#todoDate');
    let ToDo = inputElement.value;
    let Date = inputDate.value;
    todoList.push({item:ToDo,dueDate:Date});
    inputElement.value = '';
    inputDate.value = '';
    displayTodos();

}

function displayTodos(){
    localStorage.setItem('ToDoListLast', JSON.stringify(todoList))
    todoList = JSON.parse(localStorage.getItem('ToDoListLast'))
    let containerElement = document.querySelector('.Container');
    let newHTML = '';
    for(let i = 0; i < todoList.length; i++){
        let {item,dueDate} = todoList[i];
        newHTML += `
        <div>${item}</div>
        <div>${dueDate}</div>
        <button id="btn-dlt" onclick="todoList.splice(${i},1); displayTodos();">Delete</button>
        `;
        
    }
    containerElement.innerHTML = newHTML;
}