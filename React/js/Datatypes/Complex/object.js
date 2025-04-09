let person={
    name:"Chinnu",
    age:19,
    city:"Hyderabad"
};
console.log(person.name);

console.log(person.age);
person.age = 20;
console.log(person.age);

person.country = "India";
console.log(person.country);

for(let key in person)
{
    console.log(`${key}: ${person[key]}`);
}

console.log("city" in person);
console.log("gender" in person);