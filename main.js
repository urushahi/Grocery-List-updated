let form = document.getElementById("form");
let form2 = document.getElementById("form2");
form.onsubmit = add;

//define local storage if empty or retrieve the existing one
let itemsArray = JSON.parse(localStorage.getItem("items"))
  ? JSON.parse(localStorage.getItem("items")) //convert text into JSON object
  : [];

// to display the list
for (i in itemsArray) {
  var li = document.createElement("LI");
  var p = document.createElement("p");
  p.setAttribute("onClick", "edit(" + i + ")");
  var textnode = document.createTextNode(itemsArray[i]);
  p.appendChild(textnode);
  // p.setAttribute("id", i);
  li.appendChild(p);
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
    // localStorage.setItem("items", JSON.stringify(itemsArray)); //convert JS object to JSON string
    insertData();

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
    itemsArray = itemsArray.filter(function (value, index, arr) {
      return index != i;
    });
    // itemsArray.splice(i, i + 1);
    insertData();
  }
}

//clear local storage
function clearAll() {
  localStorage.clear("items");
  location.reload();
}

// edit function
// function edit(i) {
//   let e = this.event;
//   var editItem = e.target.innerText;
//   let editValue = document.getElementById("inputValue");
//   editValue.value = editItem;
//   editValue.addEventListener("keypress", function (event) {
//     if (event.keyCode === 13) {
//       event.preventDefault();
//       editItem = editValue.value;
//       itemsArray[i] = editItem;
//       console.log(itemsArray);
//       insertData();
//       // localStorage.setItem("items", JSON.stringify(itemsArray));
//     }
//   });
// }

function edit(i) {
  let e = this.event;
  var editItem = e.target;
  editItem.innerHTML =
    "<input type='text' class='form-control' id='inputValue2'/>";
  let editValue = document.getElementById("inputValue2");
  editValue.value=itemsArray[i];

  editValue.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      editItem = editValue.value;
      itemsArray[i] = editItem;
      console.log(itemsArray);
      insertData();
      // localStorage.setItem("items", JSON.stringify(itemsArray));
    }
  });
}

//insert data in localStorage
function insertData() {
  localStorage.setItem("items", JSON.stringify(itemsArray));
  location.reload();
}

// for (i in itemsArray) {
//   let ed = document.getElementById(i);
//   ed.addEventListener("click", function (event) {
//     console.dir(ed.innerText);
//   });
// }
