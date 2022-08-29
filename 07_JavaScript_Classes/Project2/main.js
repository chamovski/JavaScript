class MenuItems {
   #burgerPrice = 180;
   #picaPrice = 230;

   constructor(amountOfBurgers, amountOfPicas){
      this.amountOfBurgers = amountOfBurgers;
      this.amountOfPicas = amountOfPicas;
   }

   calculatePrice() {
      let sumOfBurgersPrice = this.amountOfBurgers * this.#burgerPrice;
      let sumOfPicasPrice = this.amountOfPicas * this.#picaPrice;
      let sum = sumOfBurgersPrice + sumOfPicasPrice;
      return sum;
   }

   get getPrice() {
      return this.calculatePrice();
   }
}

let order1 = new MenuItems(6, 2);
let order2 = new MenuItems(4, 1);
let order3 = new MenuItems(1, 2);

let arrayOfPrices = [];
arrayOfPrices.push(order1, order2, order3);
console.log(order1);
console.log(arrayOfPrices);

console.log("Total pice of first order: ", order1.getPrice + "den");
console.log("Total pice of second order: ", order2.getPrice + "den");~
console.log("Total pice of third order: ", order3.getPrice + "den");