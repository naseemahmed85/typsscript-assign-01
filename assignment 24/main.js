// Equality and Inequality test
let a = "apple";
let b = "apple";
console.log(`Equality test with strings: ${a === b}`);
let a1 = "apple";
let b1 = "banana";
console.log(`Inequality test with strings: ${a1 === b1}`);
// test using lower case and upper case
let a2 = "orange";
let b2 = "orange";
console.log(`lower case test with strings: ${a2 === b2}`);
// Numerical tests involving equality and inequality
let a4 = 100;
let b4 = 100;
console.log(`Equality test with number: ${a4 === b4}`);
let a5 = 100;
let b5 = 50;
console.log(`Inequality test with number: ${a5 === b5}`);
// greater than and less than
let a6 = 100;
let b6 = 50;
console.log(a6 > b6);
let a7 = 100;
let b7 = 50;
console.log(b7 < a7);
// greater than or equal to
let a8 = 100;
let b8 = 100;
console.log(a8 >= b8);
// less than or equal to
let a9 = 40;
let b9 = 50;
console.log(a9 <= b9);
// Tests using "and" and "or" operators
let a10 = 20;
let b10 = 50;
console.log(a10 < b10 && a10 != b10);
let a11 = 20;
let b11 = 50;
console.log(a11 > b11 || b11 > a11);
//  Test whether an item is in a array
let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana"));
// Test whether an item is not in a array
let fruit = ["apple", "banana", "orange"];
console.log(!fruit.includes("mango"));
export {};
