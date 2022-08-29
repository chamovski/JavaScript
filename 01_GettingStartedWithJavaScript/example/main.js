/* My first
javascipt code
*/

// console.log("Boban!");

// Global variable
let lname = "Srezovski";
let age = 23;

// Global const variable
const height = 180;

function FirstName(firstname) { // start of block scope
    // Local Variable
    let fname = firstname;

    /*
    This fucntion is concatinating two 
    strings with empty space between. 
    */
    console.log(fname + " " + lname);
} // end of blog scope

function LastName() {
    /*
    This fuction is showing
    only the last name into 
    the console.
    */
    console.log(lname);
}

function bio() {
    // Local Variable
    let fname = "Boban";

    age++;

    height++;
    // height = 160;

    console.log(fname + " " + lname + "- Age:" + age + "- Height:" + height);
}

// This line of code is calling the first funtion.
FirstName("Boban");
// This line of code is calling the second funtion.
LastName();

bio();

bio();
