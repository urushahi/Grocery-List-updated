let form = document.getElementById("form");
form.onsubmit = add;
// form.removeValue.onclick =remove;

// let res = document.getElementById("feedback");

//define local storage if empty or retrieve the existing one
let itemsArray = JSON.parse(localStorage.getItem("items"))
  ? JSON.parse(localStorage.getItem("items")) //convert text into JSON object
  : [];

// to display the list
for (i in itemsArray) {
  
  var li = document.createElement("LI");
  var textnode = document.createTextNode(itemsArray[i]);
  li.appendChild(textnode);
  var delbtn = document.createElement("button");
  delbtn.setAttribute("class", "delbtn btn btn-danger");
  delbtn.setAttribute("onClick", "remove(" + i + ")");
  var bText = document.createTextNode("Delete now"); // CREATE TEXT FOR THE BUTTON
  delbtn.appendChild(bText);
  li.appendChild(delbtn); // Append button inside li
  li.setAttribute("id", i);

  document.getElementById("list").appendChild(li);
}

// add item to localStorage
function add() {
  let inputValue = document.getElementById("inputValue").value;

  if (inputValue != "") {
    // add value to Array
    itemsArray.push(inputValue);

    // insert value to localStorage array
    localStorage.setItem("items", JSON.stringify(itemsArray)); //convert JS object to JSON string

    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(itemsArray[i]));

    // alert("New Item added successfully");
  } else {
    alert("The value cannot be null..");
  }
}

// remove item from local storage
function remove(i) {
  if (i > -1) {
    itemsArray.splice(i, i + 1);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();
  }
}
function clearAll() {
  localStorage.clear("items");
  location.reload();
}
