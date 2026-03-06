const person = {
    firstName: "Rahim",
    lastName: "Ali",
    id: 5566,
    fullName: function() {
        // ekhane this = person object
        return this.firstName + " " + this.lastName;
    }
};

console.log("Full Name:", person.fullName());

/**
 * 2. Alone (Ekaki) thakle:
 * Jokhoni 'this' kono function ba object-er baire thake, 
 * tokhon sheta Global Object (Browser-er jonyo 'window') ke denote kore.
 */
let x = this; 
console.log("Alone 'this':", x); // Browser-e eta [object Window] dekhabe,jokhon object na thakbe

/**
 * 3. Regular Function-er bhetor:
 * Kono sadharon function-er bhetor 'this' thakle, 
 * shetao default bhabe Global Object-ke dhore ney.
 */
function myFunction() {
    return this; 
}
console.log("Function 'this':", myFunction());


/**
 * 4. Arrow Function (Bisesh Droshtobyo):
 * Arrow function-er nijoswo kono 'this' thake na. 
 * Eta tar baire thaka parent scope-er 'this'-ke bebohar kore.
 */
const person2 = {
    name: "Karim",
    sayName: () => {
        return this.name; // Ekhane 'this' person2-ke pabe na, Global object-ke khujbe
    }
};


