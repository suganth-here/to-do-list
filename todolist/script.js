var input = document.getElementById("inputbox");
var list = document.getElementById("listbox");

function add() {
    var listitem = document.createElement("li");
    listitem.textContent = input.value + " ";
    
    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.classname = "delete-btn";
    deleteButton.onclick = deleteitem;
    
    listitem.appendChild(deleteButton);
    
    list.append(listitem);
    input.value = " "
}

function deleteitem(event) {
    event.target.parentElement.remove();
}