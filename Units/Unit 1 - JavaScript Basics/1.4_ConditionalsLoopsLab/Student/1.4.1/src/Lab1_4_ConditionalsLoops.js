/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts

let age = 15;
let price;

if (age < 12) {
  price = 5;
} else if (age >= 65) {
  price = 6;
} else {
  price = 10;
}

console.log("Ticket price: $" + price);

// TODO 2: Nested if with two numbers

let num1 = 8;
let num2 = 3;

if (num1 > num2) {
  console.log("num1 is bigger");
  if (num1 - num2 > 5) {
    console.log("The difference is more than 5");
  }
} else {
  console.log("num2 is bigger or equal");
}

// TODO 3: Switch statement for language greeting

let language = "Spanish";

switch (language) {
  case "English":
    console.log("Hello!");
    break;
  case "Spanish":
    console.log("¡Hola!");
    break;
}

// TODO 4: While loop (1 to 10)

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

// TODO 5: Do..while loop (1 to 5)

let i_1 = 1;

do {
  console.log(i_1);
  i_1++;
} while (i_1 <= 5);

// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)

for (let i = 1; i <= 20; i++) {
  if (i === 10) {
    console.log("ten");
  } else if (i === 20) {
    console.log("twenty");
  } else {
    console.log(i);
  }
}


// TODO 7: Even/Odd loop (1 to 20)

for (let i = 1; i <= 20; i++) {
  let type = (i % 2 === 0) ? "even" : "odd";
  console.log(i + " is " + type);
}

// 🚀 Stretch Goals
// - Backwards loop from 20 to 1
// - Skip multiples of 3 in even/odd loop
