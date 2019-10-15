console.log("Hello World"); // Calling a built-in function

const doNothing = () => {}; // Creating our own function
function doNothing() {} // Alternative syntax

// Creating our own function that calls a function
const sayHello = name => {
  console.log(`Hello ${name}`);
};
sayHello("Janet"); // Call the function with a single parameter

// Creating our own function that returns a value
const add = (number1, number2) => number1 + number2;
add(4, 6); // Call the function with two parameters

console.log(add(2, 7)); // Combine functions
console.log(`The sum of 5 and 1 is ${add(5, 1)}`); // Use functions in template strings
