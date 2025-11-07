/* ===========================================================
   Lab 1.2 – Data Types
   Primitive types, literals, typeof, and basic conversions.
   =========================================================== */

// TODO 1: Declare one variable for each primitive type discussed in the PDF.
// string, number, boolean, null, undefined

let s = "Hello";    // string
let n = 42;         // number
let b = true;       // boolean
let z = null;       // null
let u;              // undefined

// TODO 2: Use typeof to log each variable's type.
// console.log(typeof s);

console.log(typeof s); 
console.log(typeof n); 
console.log(typeof b); 
console.log(typeof z);
console.log(typeof u);

// TODO 3: Show string concatenation vs numeric addition using "5" and 5.

console.log("5" + 5); 
console.log(5 + 5);  


// TODO 4: Explicit conversions using Number(), String(), Boolean()

console.log(Number("123"));  
console.log(String(456));   
console.log(Boolean(0));  
console.log(Boolean("hi"));

// TODO 5: NaN and isNaN: demonstrate a case where conversion fails.

let badNumber = Number("hello");  
console.log(badNumber);      
console.log(isNaN(badNumber));

// TODO 6: Template literals: print a line that mixes text + a variable value.

let name = "Alberto";
console.log(`Hello, my name is ${name} and I am learning JavaScript!`);

/* ===========================================================
   🎟 EXIT TICKET
   1. Which data type(s) did you use today and why?
   2. Where did you encounter type conversion (implicit or explicit)?
   3. One misconception I corrected or a tip I learned:
   4. What would you try next time to debug faster?
   =========================================================== */
