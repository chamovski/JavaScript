//1. First get a number from the user 
// declarirame variabla so vrednost od prompt("Poraka do userot")
let userInput = prompt("Enter a number between 0 and 10:");
//2. Ja zememe variablata od userot i da ja konvertirame vo broj Number(variabla)
// Vrednosta od Number(variabla) moze da ja dodelime na samata variabla ili da si deklarirame nova
let userNumber = Number(userInput);
//3. Treba da dobieme  random broj so pomos Math.random() * 100 za da dobieme vrednost od 0 do 100
// ja zaokruzuvame vrednosta so Math.floor(decimala);
let randomNumber = Math.floor(Math.random() * 10);
//4. deklarirame variabla prazna za poraka || example: let message;
let message;
//
/*
    5. if() statment kade sto bi ja proverile logikata
    if(brojOdUser < randomBrojot) {
        message = "Your number " + brojOdUser + " is smaller then " + randomBrojot;
    } else if (brojOdUser === randomBrojot) {
        message = "Your number " + brojOdUser + " is equal to " + randomBrojot;
    } else if (brojOdUser > randomBrojot) {
        message = "Your number " + brojOdUser + " is grater then " + randomBrojot;
    } else {
        message = "You entered invalid number!"
    }
*/
if (userNumber < randomNumber) {
    message = "Your number " + userNumber + " is smaller then " + randomNumber;
} else if (userNumber === randomNumber) {
    message = "Your number " + userNumber + " is equal to " + randomNumber;
} else if (userNumber > randomNumber) {
    message = "Your number " + userNumber + " is grater then " + randomNumber;
} else {
    message = "You entered invalid number!"
}

//6. ja prakjame porakata vo consola || example: console.log(message);
alert(message);
