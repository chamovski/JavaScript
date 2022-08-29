let myNameArray = [
    "Boban Srezovski",
    "Ljupcho Shemov",
    "Ljupco Trajanovski",
    "Ilija Trajkovski",
    "Ilija Meloski"
];

myNameArray3

0
document.getElementById("addNew").addEventListener("click", addFriend);
function addFriend() {
    let userInput = document.getElementById("friendName").value;
    if(userInput !== ""){
        let tableRow = document.createElement("tr");
        tableRow.addEventListener("click", vote);
    }
}

function vote() {
    let vote = this.children[2].innerText;
    this.children[2].innerText = parseInt(vote) + 1;
}

function addRow(userInput) {

    let friendName = userInput;
        myNameArray.push(friendName)
        let index  = myNameArray.length -1;
        let vote = 0;

        let tdIndex = document.createElement("td");
        tdIndex.innerText = index;
        let tdName = document.createElement("td");
        tdName.innerText = friendName;
        let tdVote = document.createElement("td");
        tdVote.innerText = vote;
        tableRow.appendChild()
        tableRow.appendChild()
        tableRow.appendChild()
}