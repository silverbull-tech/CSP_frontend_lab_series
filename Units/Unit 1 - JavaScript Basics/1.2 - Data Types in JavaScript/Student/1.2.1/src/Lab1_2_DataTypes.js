/* 
 Lab 002 – Data Types in JavaScript
*/

// TODO 1: Create variables age (34) and price (12.99), print both
let age = 34;
let price = 12.99;

console.log('age: ${age}');
console.log("price: " + price);


// TODO 1b: Divide "Sandra" by 2 and print result (expect NaN)

let sandra = "Sandra";
let r = sandra / 2;
console.log(r);

// TODO 2: Print basic math ops: + - * /
let addition = 3 + 3;

let substraction = 10 - 4;

let division = 20 / 5;

let multiplication = 5 * 5;

console.log(addition);
console.log(substraction);
console.log(division);
console.log(multiplication);


// TODO 2b: Use exponentiation (2 ** 3) and modulo (7 % 2)

let exponentiation = 2 ** 3;
let modulo = 7 % 2;

console.log(exponentiation);
console.log(modulo);



// TODO 3: Assignment operators with score variable
let score = 10;

score += 5; 
score -= 2; 
score *= 3; 
score /= 2;

console.log("Final score:", score);


// TODO 4: Expressions with operator precedence

let result = 10 + 5 * 2 ** 2 / 4 - 3;
console.log("Result:", result);

// TODO 5: Strings (single, double, backticks)

let singleQuote = 'Hello';
let doubleQuote = "World";
let backticks = `${singleQuote}, ${doubleQuote}!`;

console.log(singleQuote);
console.log(doubleQuote);
console.log(backticks);


// TODO 6: String properties and methods
let greeting = "I am sad today";
// - greeting.length

console.log("Length:", greeting.length);

// - charAt(0), charAt(5), [3]

console.log("charAt(0):", greeting.charAt(0));
console.log("charAt(5):", greeting.charAt(5));
console.log("[3]:", greeting[3]);

// - indexOf("sad")


console.log('indexOf("sad"):', greeting.indexOf("sad"));
2
// - repeat()

console.log("Repeat:", greeting.repeat(2));

// - substring, substr, slice examples

console.log("substring(2, 6):", greeting.substring(2, 6));
console.log("substr(2, 6):", greeting.substr(2, 6));
console.log("slice(2, 6):", greeting.slice(2, 6));

// 🚀 Stretch Goals
// - Even number check using %
// - localeCompare() example
