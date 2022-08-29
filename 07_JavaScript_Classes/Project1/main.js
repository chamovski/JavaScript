class Person {
   constructor(firstname, lastname, yearsWorked) {
      this.firstname = firstname
      this.lastname = lastname
      this.yearsWorked = yearsWorked
   }
}
let arrayOfPersons = [];

let person1 = new Person("Boban", "Srezovski", 5);
let person2 = new Person("Stefan", "Kostovski", 3);
let person3 = new Person("Dijana", "Abadzieva", 6);

arrayOfPersons.push(person1,person2,person3);

Person.prototype.bio = function () {
   return this.firstname + " " + this.lastname + " Worked for " + this.yearsWorked + " years.";
}

console.log("-----------------forEach loop---------------------");
arrayOfPersons.forEach(element => {
   console.log(element);
});

console.log("-----------------for loop---------------------");
for (let i = 0; i < arrayOfPersons.length; i++) {
   const element = arrayOfPersons[i];
   console.log(element.bio());
}