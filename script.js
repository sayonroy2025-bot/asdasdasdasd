var myForm = document.getElementById("myForm");
var myInput = document.getElementById("myInput");
var myItem = document.getElementById("myItem");
myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (myInput.value.trim() !== "") {
        createItem(myInput.value);
    }
});
function createItem(inputItems) {
    var li = document.createElement("li");
    li.textContent = inputItems + " ";
     var deleteBtn = document.createElement("button");
     deleteBtn.textContent = "delete";

     deleteBtn.addEventListener("click", function() {
        li.remove();
});
     li.appendChild(deleteBtn);
     myItem.appendChild(li);
     myInput.value = "";
     myInput.focus();
}