// let addNeed = document.getElementById("addNeed");
// let addHave = document.getElementById("addHave");
// let itemInput = document.getElementById("itemInput");
// let needList = document.getElementById("needList");
// let haveList = document.getElementById("haveList");
// addNeed.addEventListener("click", addItem);
// addHave.addEventListener("click", addItem);


// function addItem(event) {
//     event.preventDefault();
//     let userInput = itemInput.value;
//     if(userInput !== ""){
//         let list;
//         let checked = "";
//         if(event.srcElement.id === "addNeed") {
//             list = document.getElementById("needList");
//         }else{
//             list = document.getElementById("haveList");
//             checked = "checked";
//         }
//         list.innerHTML += `<li><input type="checkbox" name="item" ${checked} onclick="switchList"> ${userInput} <button onclick="deleteItem(this)">X</button></li>`;
//         itemInput.value = "";
//     }
// }

// function deleteItem(element) {
//     let listItem = element.parentElement;
//     let list = listItem.parentElement;
//     list.removeChild(listItem);
// }

// function switchList(element) {
//     if (element.checked) {
//         needList.removeChild(element.parentElement);
//         haveList.appendChild(element.parentElement);
//     } else {
//         haveList.removeChild(element.parentElement);
//         needList.appendChild(element.parentElement);
//     }
// }

let addNeed = document.getElementById("addNeed");
let addHave = document.getElementById("addHave");
let itemInput = document.getElementById("itemInput");
let needList = document.getElementById("needList");
let haveList = document.getElementById("haveList");
addNeed.addEventListener("click", addItem);
addHave.addEventListener("click", addItem);
function addItem(event) {
    event.preventDefault();
    let userInput = itemInput.value;
    if (userInput !== "") {
        let list;
        let checked = "";
        if (event.srcElement.id === "addNeed") {
            list = document.getElementById("needList");
        } else {
            list = document.getElementById("haveList");
            checked = "checked";
        }
        list.innerHTML +=
            `<li>
                <input type="checkbox" name="item" ${checked} onclick="switchList(this)"> 
                ${userInput} 
                <button onclick="deleteItem(this)">X</button>
            </li>`;
        itemInput.value = "";
    }
}
function deleteItem(element) {
    let listItem = element.parentElement;
    let list = listItem.parentElement
    list.removeChild(listItem);
}
function switchList(element) {
    if (element.checked) {
        needList.removeChild(element.parentElement);
        haveList.appendChild(element.parentElement);
    } else {
        haveList.removeChild(element.parentElement);
        needList.appendChild(element.parentElement);
    }
}