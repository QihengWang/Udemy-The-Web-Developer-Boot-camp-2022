let todoList = [];
while (true) {
    let input = prompt("What would you like to do?");
    if (input === "quit")
        break;
    switch (input) {
        case "new":
            let newTodo = prompt("Enter new todo:")
            todoList.push(newTodo);
            console.log("Collect " + newTodo + " to list");
            break;
        case "list":
            console.log("**********");
            for (let i = 0; i < todoList.length; i++) {
                console.log(i + ": " + todoList[i]);
            }
            console.log("**********");
            break;
        case "delete":
            let deleteTodo = prompt("Enter index of todo to delete:");
            todoList.splice(deleteTodo, 1);
            console.log("Todo removed");
            break;
        default:
            alert("Please enter a valid input!");
    }
}
console.log("OK, YOU QUIT THE APP")