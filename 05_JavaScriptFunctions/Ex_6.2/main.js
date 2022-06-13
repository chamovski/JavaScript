let arr = ["Beautiful", "Fast", "Smart", "Strong"];

function describeMe() {
    let name = prompt("What's your name?");
    let randomNumber = Math.floor(Math.random() * 4);
    console.log(name, "is", arr[randomNumber]);
}   

describeMe();