// Creating an object
let person = {
    name: "Chinnu",
    age: 19,
    city: "Hyderabad"
};

// Accessing properties
console.log(person.name); // Output: John

// Modifying properties
person.age = 20;
console.log(person.age); // Output: 26

// Adding a new property
person.country = "INDIA";
console.log(person); 

// Looping through an object
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Checking if a property exists
console.log("city" in person); // Output: true
