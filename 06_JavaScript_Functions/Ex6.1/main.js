function addTwoNumbers(a, b) {
    let varA = a;
    let varB = b;
    let result = varA + varB;
    return result;
}

function logInConsole(parametar, vtorPrametar) {
    let prvDel = parametar + ":";
    let vtorDel = vtorPrametar;
    console.log(prvDel, vtorDel);
}

logInConsole("Boban", "Test 1");
logInConsole("Goran", "Test 2");
logInConsole("Goran", "Test 3");
logInConsole("Goran", "Test 4");

console.log(addTwoNumbers(5, 6));
console.log(5 + 6);
console.log(addTwoNumbers(12, 3));
console.log(addTwoNumbers(12, 6));