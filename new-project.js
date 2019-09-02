// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
span.appendChild(txt);
myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
close[i].keypress = function() {
    var div = this.parentElement;
    div.style.display = "none";
}
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
}
}, false);



// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
        }
    }
    }



document.getElementById("myInput").value = "";



for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
}

let data = JSON.parse(localStorage.getItem('new-project')) || [];
const genTimeStamp = () => {
return new Date().getTime()
}

const saveToLocalStorage = (data) => {
    if (data) {
        localStorage.setItem('new-project', JSON.stringify(data));
    }
}

const addNewItem = () => {
    const valueInput = document.getElementById('myInput').value;
    
    const dataToSave = {
        id: genTimeStamp(),
        name: valueInput,
        status: false,
    }
    data = [...data, dataToSave];
    saveToLocalStorage(data);
    clearInput();
    updateView();
}

const deleteItem = (id) => {
    data = data.filter(el => el.id !== id);
    saveToLocalStorage(data);
    updateView();
}

const toggleCheckState = (id) => {
    let index = data.findIndex(el => el.id === id);
    data[index].status = !data[index].status;
    saveToLocalStorage(data);
    updateView();
}

const updateView = () => {
    const list = document.getElementById('list');
    list.innerHTML = '';
    const template = (id, name, status) => {
        return(`
        <div idTODO="${id}" class="item ${status ? 'is-checked' : 'non-checked'}">
            
            <li class="name">${name}</li><li class="action" onclick="deleteItem(${id})">Delete</li>
            </li>
        </div>`)
    }
    data.map(el => {
        list.insertAdjacentHTML('beforeend', template(el.id, el.name, el.status));
    });
}

const clearInput = () => {
    document.getElementById('myInput').value = '';
    console.log('clear')
}


// When page load
updateView();
window.addEventListener('keypress', (e) => {
    // Press enter button on keyboard
if (e.keyCode === 13) {
    addNewItem();
}
})

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}


function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
window.onload = function(){ 
    if (document.getElementById('sw')){
        document.getElementById('sw').onclick = function () { 
        document.getElementById('theme').href = 'light.css';
    }
    }
    if (document.getElementById('sw2')){
        document.getElementById('sw2').onclick = function () { 
        document.getElementById('theme').href = 'dark.css';
    }
    }
    if (document.getElementById('sw3')){
        document.getElementById('sw3').onclick = function () { 
        document.getElementById('theme').href = 'green.css';
    }
    }
    if (document.getElementById('sw4')){
        document.getElementById('sw4').onclick = function () { 
        document.getElementById('theme').href = 'yellow.css';
    }
    }
    if (document.getElementById('sw5')){
        document.getElementById('sw5').onclick = function () { 
        document.getElementById('theme').href = 'comic.css';
    }
    }
}

