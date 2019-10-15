// Boolean
const isAlive = true;
const isDead = !isAlive; // You can use "!" to negate things
const isNamed = Boolean(name); // You can convert something to a boolean

// String
const name = "Janet";
const country = 'Canada'; // Single-quote strings are just like double-quoted ones
const verb = String("born"); // You can convert something to a string
const combined = `${name} was ${verb} in ${country}`; // Template strings

// Number
const age = 37;
const weight = Number(124); // You can convert something to a number

// Null
const nothing = null;

// Undefined
const person = { name: "Janet", age: 37 };
person.height // undefined because person has no height property