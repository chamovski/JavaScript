let a = 36;
let b = 15;

let c = Math.sqrt(a ** 2 + b ** 2);
console.log(c);


function findHypotenuse() {
    let sideA = parseInt(document.getElementById("sideA").value);
    let sideB = parseInt(document.getElementById("sideB").value);

    document.getElementById("a").innerHTML = "a = " + sideA;
    document.getElementById("b").innerHTML = "b = " + sideB;
    document.getElementById("c2").innerHTML = "c = " + Math.sqrt((sideA ** 2 + sideB ** 2));

}