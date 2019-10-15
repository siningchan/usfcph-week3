// Object
const person = { name: "Janet", age: 37 };

person.weight = 124; // Assigning values with dot notation
const name = person.name; // Reading values with dot notation

person["nickname"] = "Jan"; // Assigning values with bracket notation
const age = person["age"]; // Reading values with bracket notation

// Array
const hobbies = ["running", "skiing", "kayaking", "feeding cats"];
const lottoNumbers = [1, 4, 15, 24, 46];

hobbies.push("yoga"); // Adding an item to the end of the array
const third = lottoNumbers[2]; // Returns 15 because JS is a zero-based language

// Date
const now = new Date();
