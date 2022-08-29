console.log("test");


let arr = ["hi there", 5, true];

console.log(arr);

console.log("arr firts value: " + arr[0] + ". Is of type: " + typeof arr[0]);
console.log("arr second value: " + arr[1] + ". Is of type: " + typeof arr[1]);
console.log("arr third value: " + arr[2] + ". Is of type: " + typeof arr[2]);


let arr2 = new Array(10);

console.log(arr2);

let colors = ["red", "green", "blue"];

let index = colors.indexOf("orange");
console.log("TESTTTTT BOOOBII");
console.log("green is on index : " + index);

let boolean = [true, false, false, true];
let emptyArr = [];

console.log("The lenght of the colors array is: " + colors.length);
console.log("The lenght of the boolean array is: " + boolean.length);
console.log("The lenght of the emptyArr array is: " + emptyArr.length);

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

console.log("-----------------------------------------------------------");
let arr10 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr10[arr10.length - 1]);

console.log(colors[colors.length - 1]);

console.log("-----------------------------------------------------------");
let favoritFruits = ["grapefruit", "orange", "lemon"];

console.log(favoritFruits);

let lenghtOfFavoritFruits1 = favoritFruits.push("tangerine");
console.log(lenghtOfFavoritFruits1);

console.log(favoritFruits);

let lenghtOfFavoritFruits2 = favoritFruits.push("lime");
console.log(lenghtOfFavoritFruits2);

console.log(favoritFruits);

let lenghtOfFavoritFruits3 = favoritFruits.splice(2, 3, "fruit1", "fruit2");
console.log(lenghtOfFavoritFruits3);
console.log(favoritFruits);

let arrNum1 = [1, 2, 3];
let arrNum2 = [4, 5, 6];
let arrNum3 = arrNum1.concat(arrNum2);
let arrNum4 = arrNum3.concat(7, 8, 9);

console.log(arrNum3);
console.log(arrNum4);
