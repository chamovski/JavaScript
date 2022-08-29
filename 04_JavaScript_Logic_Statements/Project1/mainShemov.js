let userInput = prompt("Enter a number from 0 to 10:");
//console.log(userInput);
let userNumber = Number(userInput);
//console.log(userNumber);
let randomNumber = Math.floor(Math.random() * 10);
//console.log(randomNumber);

let message;

if (userNumber < randomNumber) {
    message = `Your number ${userNumber} is smaller then ${randomNumber}`;
} else if (userNumber === randomNumber) {
    message = `Your number ${userNumber} is equal to ${randomNumber}`;
} else if (userNumber > randomNumber) {
    message = `Your number ${userNumber} is greter to ${randomNumber}`;
} else {
    message = "You entered an invalid number!"
}

alert(message);