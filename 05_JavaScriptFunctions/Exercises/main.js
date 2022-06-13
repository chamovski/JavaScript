function loginToConsole(param) {
    console.log(param);
}
loginToConsole("string");
loginToConsole(25);
loginToConsole(true);

function multiply(num1,num2){
    if (typeof num1 === 'number' && typeof num2 == 'number'){
        console.log(num1 * num2);
     }else{
        console.log("Not a number");
     }
}
multiply(5, 3);

function evenOrOdd(num){
    if(num % 2 == 0) {
        console.log("The number is even.");
    }
    else {
        console.log("The number is odd.");
    }
}
evenOrOdd(5);
evenOrOdd(8);



function palindrome(str) {
    let myWordReversed = str.split('').reverse().join('');
        if(myWordReversed.toLowerCase === str.toLowerCase) {
            console.log("This is palindrome");
        }   
        else{
            console.log("This is not a palindrome");
        }
  }
  palindrome("Madam");

  function calcFactorial(num) {
      console.log(num);
      if (num === 0) {
          return 1;
      }
      else{
          return num * calcFactorial(num-1);
      }

  }
  calcFactorial(5);