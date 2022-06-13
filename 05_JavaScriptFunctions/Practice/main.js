function sayHallo() {
    let you = prompt("What's your name?");
    console.log("Hallo", you + "!")
}

//sayHallo();

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
    return num1 + num2;
}

addTwoNumbers(10, 20);

let varFunctionAddTwoNumbers = function (x , y) {
    console.log(x + y);
}


varFunctionAddTwoNumbers(10,10);
varFunctionAddTwoNumbers(20,20);

let arrowFunctionAddTwoNumbers = (param1, param2) => console.log(param1 + param2); 
let arrowFunctionLogString = x => console.log("Hello", x + "!");

arrowFunctionAddTwoNumbers(5, 1);
arrowFunctionAddTwoNumbers(1, 3);
arrowFunctionLogString("Ivan");

let nameArray = ["Simona", "Ljupco", "Barbara"];

let resultsArr = [];
for (let i = 0; i < 10; i++) {
    let result = addTwoNumbers(i, 2 * i);
    resultsArr.push(result);
}

console.log(resultsArr);