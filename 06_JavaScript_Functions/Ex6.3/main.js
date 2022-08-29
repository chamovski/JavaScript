// kreirame variabla so vrednost od nekoj broj
// kreirame vtora variabla so vrednost od nekoj broj
// kreirame treta variabla so nekoj operator ex: "-" ili "+"
let argumentNumber1 = 12;
let argumentNumber2 = 20;
let argumentOperator = "/";

// kreirame funkcija so tri prametri 
// ex: function imeNaFunkcija(param1, param2, param3) {}

function myCalculator(paramNumber1, paramNumber2, paramOperator) {
    switch (paramOperator) {
       case "+":
          return paramNumber1 + paramNumber2;
          break;
       case "-":
          return paramNumber1 - paramNumber2;
          break;
       case "*":
          return paramNumber1 * paramNumber2;
          break;
       case "/":
          return paramNumber1 / paramNumber2;
          break;
    }
}
// vo block scope na funcijata treba da napravime switch statment 
/*
  ex: switch(param3) {
      case "+":
          return param1 + param2;
          break;
      case "-":
        return param1 - param2;
        break;
    }
*/

console.log(myCalculator(argumentNumber1,argumentNumber2,argumentOperator));
console.log(myCalculator(10,20,"+"));
console.log(myCalculator(10,20,"-"));