let prize = prompt("Insert a number between 0 and 10");

prize = Number(prize); // convert the number from string || example: let variable = Number("string");

let message = "My selection: ";

switch (prize) {
    case 0:
    case 1:
        message = message + "coins";
        break;
    case 3:
        message += "bear";
        break;
    case 4:
    case 5:
    case 6:
        message = message + "lollipop";
        break;
    case 7:
        message = message + "rabbit";
        break;
    case 8:
        message = message + "bottle";
        break;
    case 9:
    case 10:
        message = message + "keychain";
        break;
    default:
        message = "You selected wrong number!";
        break;
}

alert(message);

function beting() {
    let bet = document.getElementById("bet").value;
    console.log(bet);
    let randomNumber = Math.floor(Math.random() * 10);

    let message;
    switch (randomNumber) {
        case 5:
            message = "You won: " + bet * 2.55
            break;
        case 9:
            message = "You won: " + bet * 10.45
            break;
        default:
            message = "You lost!"
            break;
    }

    document.getElementById("message").innerHTML = message;
}

