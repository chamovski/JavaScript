// let object = {
//     name: "",
//     status: false
// }
// let stat = false;
let myWork = [];

for (let i = 1; i <= 10; i++) {
   // console.log(i);
   //stat = !stat
   myWork.push(
       {
           name: "Lesson " + i,
           status: i % 2 === 0 ? true : false
       }
   );
  // myWork.push({name: "", status: i % 2 === 0 ? true : false});
}

console.log(myWork);