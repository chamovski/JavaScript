console.log("test");

let nr1 = 10;
let nr2 = 4;

let result = nr1 * nr2;

console.log(nr1 + " * " + nr2 + " = " + result);
console.log(`${nr1} * ${nr2} = ${result}`);

result = nr1 / nr2;

console.log(nr1 + " / " + nr2 + " = " + result);
console.log(`${nr1} / ${nr2} = ${result}`);

result = nr1 % nr2;

console.log(nr1 + " / " + nr2 + " = " + result);
console.log(`${nr1} / ${nr2} = ${result}`);

// delcaration of a number
let incNumber = 0;
// incrementation of a number

++incNumber;
// loging the number in the console
console.log(incNumber);

let nr3 = 4;
let nr4 = 5;
let nr5 = 2;

++nr3;
let newNr3 = nr3;
console.log(newNr3);
console.log(++nr3 + ++nr4 * ++nr5);


let square = Math.sqrt(Math.pow(num1, 2) + Math(num2, 2));
document.getElementById("num3").innerHTML = square;

function hypotenuse() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    document.getElementById("a").innerHTML = "a = " + num1;
    document.getElementById("b").innerHTML = "b = " + num2;
    document.getElementById("c").innerHTML = "c2 = " + (num1 ** 2) + " + " + (num2 ** 2);
    document.getElementById("c2").innerHTML = "c = " + Math.sqrt((num1 ** 2 + num2 ** 2));

}

let x = 2;
x += 2;
x = x + 2;

x *= 2;
x = x * 2;


