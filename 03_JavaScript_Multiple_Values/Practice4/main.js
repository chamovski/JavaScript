let myCar = {
    make: "Ford",
    model: "Fiesta",
    year: 2020,
    color: "red",
    automatic: false,
    kmh: 0,
    aclerate(kmh, acc) {
        return kmh + acc;
    }
};

let propertyVariable = "color";
myCar[propertyVariable] = "green";

console.log(myCar[propertyVariable]);

propertyVariable = "forSale";
myCar[propertyVariable] = false;

console.log(myCar.make + " " + myCar.model);

let message = "";

if (myCar[propertyVariable]) {
    message = "The car is for sale!"
} else {
    message = "The car is not for sale!"
}
console.log(message);

myCar.kmh = myCar.aclerate(myCar.kmh, 10)
console.log(myCar.kmh);

myCar.kmh = myCar.aclerate(myCar.kmh, 10)
console.log(myCar.kmh);

myCar.kmh = myCar.aclerate(myCar.kmh, 30)
console.log(myCar.kmh);

let company = {
    companyName: "Healthy Candy",
    activity: ["food manufacturing", "improving kid's health", "manufacturing toys"],
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miamy",
        state: "Florida",
    },
    yearOfEstablishment: 2021
};

company.address.zipcode = "33117";
console.log(company.address.zipcode);

company["address"]["number"] = "100";
console.log(company["address"]["number"]);