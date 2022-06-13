let arr = ["hi there", 5, true];
console.log(arr);

console.log("arr firts value: " + arr[0] + ". Is of type: " + typeof arr[0]);
console.log("arr second value: " + arr[1] + ". Is of type: " + typeof arr[1]);
console.log("arr third value: " + arr[2] + ". Is of type: " + typeof arr[2]);

let arr2 = new Array(10);

console.log(arr2);

let colors = ["red", "green", "blue"];
let boolean = [true, false, false, true];
let emptyArr = [];

console.log("The lenght of the colors array is: " + colors.length);
console.log("The lenght of the boolean array is: " + boolean.length);
console.log("The lenght of the emptyArr array is: " + emptyArr.length);

console.log("------------------------------------------");
let shopList = ["Milk", "Bread", "Apples"];
console.log(shopList.length);
shopList[1] = "Bananas";
console.log(shopList);

console.log("------------------------------------------");
let favoriteFruits = ["grapefruit ", "orange ", "lemon"];
console.log(favoriteFruits);
favoriteFruits.push("tangerine");
console.log(favoriteFruits);
let length
lengthOfFavoriteFruits = favoriteFruits.push("lime");
console.log(lengthOfFavoriteFruits);
console.log(favoriteFruits);

favoriteFruits.splice(2, 0, "fruit1", "fruit2");
console.log(favoriteFruits);

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);
arr8.pop();
console.log(arr8);
arr8.shift();
console.log(arr8);
delete arr8[0];
console.log(arr8);

arr8 = [2, 6, 7, 8];
let findValue = arr8.find(function(e) {return e === 6});
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);

arr8 = [2, 6, 7, 8];
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2);
