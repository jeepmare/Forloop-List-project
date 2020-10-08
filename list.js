let listArray = [15]


let button = document.getElementById("Additem");
button.onclick = function() {
    // todoStore = document.getElementById("pullBox").value;
    let textInput = document.getElementById("myInput").value
    listArray.push(textInput);
    console.log(listArray);
    displayTodo(listArray);
    clear();
}


let displayTodo = function(Todos) {
    //remove old content from the ul innerhtml
    document.getElementById('todolist').innerHTML = '';
    //loop through list array foreach
    Todos.forEach(function(todoText, index){
        //create new LI + button
        let newTodoText = document.createElement("li");
        newTodoText.className = "container"
            let deleteButton = document.createElement("button");
            deleteButton.appendChild(document.getElementById("todolist"))
            deleteButton.className = "DeleteButton"
            deleteButton.appendChild(document.createTextNode('X'));
            deleteButton.setAttribute("id",index)
            deleteButton.onclick = removeTodo
        // document.getElementById("firstTodo").appendChild(deleteButton);
        newTodoText.textContent = todoText
        console.log(todoText)
        console.log(index)

    })
}
let removeTodo = function() {
    listArray.splice(event.target.id, 1)
    displayTodo(listArray)
}
let clear = function() {
    document.getElementById("myInput").value ="" 

}

let keyRegistry = document.getElementById("myInput")
myInput.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("Additem").click();
    }
});

displayTodo(listArray)