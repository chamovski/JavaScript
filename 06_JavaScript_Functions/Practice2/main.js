function logName() {
//   console.log("Baban"); 
}

function logNameWithParams(ime) {
   console.log(ime);
}

// console.log("Prvo ime");

// 1. variabla sto zacuvava broj na minuti PR. 360; 
// 1. variabla sto zacuvava broj na minuti PR. 390; 
let minutes = 360;
// 2. Kreirame funkcija koja prima eden parametar.

// function minutesToHours(min) {
// }

// 3. Vo samata funkcija kreirajte variabla sto bi go zacuvala rezultatot.
// Samiot rezultat e parametarot / 60 

// 4. Napravite return na samata variabla so rezultatot;

function minutesToHours(min) {
   let result = min / 60;

   let hours = Math.floor(result)
   const decimalStr = result.toString().split('.')[1];
   let decimalNum = decimalStr === undefined ? 0 : Number(decimalStr);
   let minutes =  decimalNum * 60 / 10;
   return `${hours}h  ${minutes}m`;
}

// 5. Trba da se povika samata funkcija so zacuvanata prva variabla 
// kako argument
// PR. imeNaFunkcija(argumentot)

// 6. Povikuvanjeto na funkcijata treba da bide vrapnato vo console.log()
// PR. console.log(imeNaFunkcija(argumentot));

// console.log(minutesToHours(minutes));
minutes = 390;
// console.log(minutesToHours(minutes));


// 25. Write a JavaScript function that accept a list of country 
// names as input and returns the longest country name as output. 
// Go to the editor
// Sample function : 
// Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

// let arrOfCountries = ["United States of America", "Australia", "Germany", "North Macedonia"];
// arrOfCountries[4];
// console.log(arrOfCountries[4]);

function longestCountryName(arr) {
   let longestName = "";
   if (typeof arr === "object" && arr.length > 0) 
      for (let i = 0; i < arr.length; i++) 
         longestName = longestName.length < arr[i].length ? arr[i] : longestName

   // console.log(longestName, longestName.length);
}

// Create a basic calculator

let x = 12;
let y = 10;
let oprator = '-';


function basicCalculator(param1, param2, param3) {
   let oparation = `${param1} ${param3} ${param2}`;
   switch (param3) {
      case '*':
         return `The operation is multiplication | ${oparation} = ${param1 * param2}`;
      case '+':
         return `The operation is sum | ${oparation} = ${param1 + param2}`;
      case '-':
         return `The operation is subtraction | ${oparation} = ${param1 - param2}`;
   }
}

// console.log(basicCalculator(x, y, oprator));
// console.log(basicCalculator(5, 10, '+'));

// Recursive functions

function getRecursive(num) {
   console.log(num);
   if (num > 0) {
      getRecursive(--num);
      num++;
   }
   console.log('End of call', num);
}

//getRecursive(3);


function logRecursive(nr) {
   console.log("Started function:", nr);
   if (nr > 0) {
      logRecursive(nr -1);
   } else {
      console.log("Done with recursion");
   }
   console.log("Ended function:", nr);
}

logRecursive(5);

