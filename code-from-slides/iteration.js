const hobbies = ["running", "skiing", "kayaking", "feeding cats"];
const lottoNumbers = [1, 4, 15, 24, 46];

// ForEach

hobbies.forEach(hobby => console.log(`I love ${hobby}!`)); // Print out each phrase
lottoNumbers.forEach(number => console.log(number)); // Print out each lottery number

// Map

const tense = hobbies.map(hobby => hobby.replace("ing", "s")); // Replace "ing" with "s"
const doubled = lottoNumbers.map(number => number * 2); // Double each number

// Filter

// If the hobby contains the letter A, add it to the new array
const hobbiesWithAs = hobbies.filter(hobby => hobby.includes("a"));
// If the number divided by two has no remainder, add it to the new array
const evenNumbers = lottoNumbers.filter(number => number % 2 === 0);