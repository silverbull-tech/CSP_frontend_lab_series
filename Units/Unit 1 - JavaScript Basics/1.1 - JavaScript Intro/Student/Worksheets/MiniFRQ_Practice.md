# Mini FRQ — Lab 1.1 (Intro)

**Prompt:** Write JavaScript that declares two variables `width` and `height`. Compute and log the **area** and **perimeter** of a rectangle. Then log a sentence using template literals to summarize the results.


let width = 5;
let height = 8;


let area = width * height;
let perimeter = 2 * (width + height);


console.log("Area:", area);
console.log("Perimeter:", perimeter);


console.log(`A rectangle with width ${width} and height ${height} has an area of ${area} and a perimeter of ${perimeter}.`);