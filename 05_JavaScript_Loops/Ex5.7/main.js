let simpleObject = {
   Id: 1,
   type: "Ice cream",
   description: "milk product"
}
let array = [];
for (const prop in simpleObject) {
  // console.log("Name of prop: " + prop + " -- value of prop: " + simpleObject[prop]);
   array.push(simpleObject[prop]);
}

//console.log(Object.keys(simpleObject));
//console.log(Object.values(simpleObject));
//console.log(array);

// for (const keys of Object.keys(simpleObject)) {
//    console.log(`${keys}: ${simpleObject[keys]}`);
// }

for (let i = 0; i < 10; i++) {
   if (i === 4) {
      break;      
   }
   console.log(i);
}
console.log("-------------------------------------");
for (let i = 0; i < 10; i++) {
   if (i === 4) {
      continue;      
   }
   console.log(i);
}