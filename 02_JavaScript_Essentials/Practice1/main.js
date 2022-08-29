let language = "Javascipt";

let message = `Let's learn ${language} it's fun`;

console.log(message);

let str = "Hello, what's your name? Is it \"Mike\"?"
let str2 = 'Hello, what\'s your name? Is it "Mike"?'
let str3 = `Hello, what's your name? Is it "Mike"?`

let num = parseFloat("15.38");
console.log(num);

let number = 90071992355634545231n;
console.log(number);

let testVariable = 1;
let varableTestType1 = typeof testVariable;
let varableTestType2 = typeof (testVariable);
console.log(varableTestType1);
console.log(varableTestType2);
console.log("-----------------------");
let nrToString = 10;
nrToString = String(nrToString);
console.log(nrToString, typeof (nrToString));
console.log("-----------------------");
let strToNr = "20";
strToNr = Number(strToNr);
console.log(strToNr, typeof (strToNr));
console.log("-----------------------");
let strToBool = null;
strToBool = Boolean(strToBool);
console.log(strToBool, typeof (strToBool));
console.log("-----------------------");
let nullToNr = null;
nullToNr = Number(nullToNr);
console.log(nullToNr, typeof (nullToNr));
console.log("-----------------------");
let str2ToNr = "";
str2ToNr = Number(str2ToNr);
console.log(str2ToNr, typeof (str2ToNr));

let name = "Boban";
let age = 23;
let codeJavaScript = true;


console.log("My age is " + strToNr + " years old");
console.log(`My age is ${strToNr} years old`);

let a = prompt();
console.log(a);

let b = prompt();
console.log(b);

console.log(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));