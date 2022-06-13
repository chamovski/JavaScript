/* 
Multiline Comment
*/
//console.log("Ivan Chamovski");

// Global Varieable
let lname = "Chamovski";
let age = 23;
// Global const variable
const height = 180;

function Firstname(firstname) { // start of block scope
  //Local Variable
  let fname = firstname;
  /*
    This function is concatinating two
    strings with empty space between.
    */
  console.log(fname + " " + lname);
} // end of blog scope

function Lastname() {
  /*
    This function is showing only
    the last name 
    into the console.
    */
  console.log(lname);
}

function bio(){
    //Local variables
    let fname = "Ivan";

    age++;

    //height++;

    console.log(fname + " " + lname + " Age: " + age + " Height: " + height);
}

//This line of code is calling the first function
Firstname("Ivan");
//This line of code is calling the second function
Lastname();
bio();
bio();