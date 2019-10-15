const person = { name: "Janet", nickname: null, age: 37, isAlive: true, weight: 124 };

if (isAlive) {
  const name = person.nickname || person.name; // Prefer the nickname
  const age = person.age >= 18 ? "an adult" : "a child"; // Use a ternary
  console.log(`${name} is ${age} and ${person.weight}lbs`);
} else {
  console.log(`Sorry, ${person.name} has died`);
}

// Same thing but with a short circuit instead of an if / else

if (!isAlive) return console.log(`Sorry, ${person.name} has died`);
// We can assume if we got this far, the person is alive and well
// Return would be used inside of a function
// You can also throw an error instead of returning
const name = person.nickname || person.name; // Prefer the nickname
const age = person.age >= 18 ? "an adult" : "a child"; // Use a ternary
console.log(`${name} is ${age} and ${person.weight}lbs`);
