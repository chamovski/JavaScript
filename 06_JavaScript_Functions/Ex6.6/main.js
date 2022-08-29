// function calcFactorial(num) {
//    console.log(num);
//    if (num === 0) {
//       return 1;
//    } else {
//       let result = num * calcFactorial(num - 1);
//       console.log(result);
//       return result
//    }
// }
// console.log(calcFactorial(5));

let array1 = [1, 2, 3, 4, 5, 6];

function reverseArray(arr) {
   let reversedArr = [];

   for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
   }

   return reversedArr;
}

console.log(reverseArray(array1));