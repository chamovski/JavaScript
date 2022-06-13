function logName(){
    console.log("Ivan");
}

function logNameWithParams(ime){
    console.log(ime);
}

let minutes = 360;
function minutesToHourss(minutes){
    
    let hours = Math.floor(minutes / 60);

    return (hours);
}

console.log(minutesToHourss(minutes))

function minutesToHours(min) {  
    let result
    
}

let x = 12;
let y = 10;
let oprator = '-';


function basicCalculator(param1, param2, param3) {
   let result;
   let oparation = `${param1} ${param3} ${param2}`;

   switch (param3) {
      case '*':
         result = param1 * param2;
         console.log("The operation is multiplication", oparation, "= " + result);
         break;
      case '+':
         result = param1 + param2;
         console.log("The operation is sum", oparation, "= " + result);
         break;
      case '-':
         result = param1 - param2;
         console.log("The operation is subtraction", oparation, "= " + result);
         break;
   }
}

basicCalculator(x, y, oprator);
basicCalculator(5, 10, '-');