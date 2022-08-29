class Person {
   #firstName;
   #lastName;

   constructor(firstName, lastName) {
      this.#firstName = firstName;
      this.#lastName = lastName;
   }

   fullName() {
      return this.#firstName + " " + this.#lastName;
   } 
}

let person1 = new Person("Boban", "Srezovski");
let person2 = new Person("Ljupco", "Trajanovski");


console.log("Hello,", person1.fullName());
console.log("Hello,", person2.fullName());