console.log(
  "#=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X= JavaScript Conditional Statements =X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=#"
);
/* In Javascript when we write a code, we want to perform different actions for different decisions. 
   when You can conditional statements in your code to do this. in js we have the following conditional satements:- 
    Use if to specify a block of code to be executed, if a specified condition is true.
    Use else to specify a block of code to be executed, if the same condition is false.
    Use else if to specify a new condition to test, if the first condition is false.
    Use switch to specify many alternative blocks of code to be executed.

    switch :- Based on a condition, switch selects one or more code blocks to be executed.
    switch executes the code blocks that matches an expression.
    switch is often used as a more readable alternative to many if...else if...else statements, especially when dealing with multiple possible values.

    break :- When JavaScript reaches a break keyword, it breaks out of the switch block. This will stop the execution inside the switch block.
    default :- The default keyword specifies a block of code to run if there is no case match. The default keyword is optional. The default can act as a fallback.
 */

// 1. Agar specified condion true ho to block of code ko execute karne ke lie hum {" if "} statement ka use karte hai
let Age = 95;
if (Age > 90) {
  console.log("Abhi tak zinda h");
}

// 2. Agar specified condition false ho to block of code execute krne ke lie hum {"else"} statement ka use krte hai
let isMission = false;
if (isMission) {
  console.log("Congrats for acheving you gols");
} else {
  console.log(
    "This time also you could not do it, we knew that you would not be able to do it"
  );
}

// 3. If we have multiple conditions then specified condition false hoti hai to hum ek new condition check karne ke lie hum {" else if "} ka use karte hai
let marks = 69;
if (marks >= 90) {
  console.log("First Rank");
} else if (marks >= 80) {
  console.log("Second Rank");
} else if (marks >= 70) {
  console.log("Third Rank");
} else {
  console.log("Ohh! sorry you are fail 😥😥😥");
}

// 4. Kisi condition ke base par, switch ek ya ek se zyada code blocks ko execute karta hai. switch us code block ko execute karta hai jo expression se match karta hai. switch ka use aksar if...else if...else ke alternative ke roop me hota hai, especially jab multiple possible values handle karni hoti hain.

let num1 = 10;
let num2 = 5;
let operator = "*";

switch (operator) {
  case "+":
    console.log("Result is :", num1 + num2);
    break;

  case "-":
    console.log("Result is :", num1 - num2);
    break;

  case "*":
    console.log("Result is :", num1 * num2);
    break;

  case "/":
    console.log("Result is :", num1 / num2);
    break;

  default:
    console.log("Invalid Result");
}

console.log(
  "#=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X= JavaScript Looping Statements =X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=#"
);
/*  Looping statements execute code of blocks of code a number of times. loops are handy, if we want to run the same code repeatedly again and again with different value. 
    for
     Defines a loop that executes a block of code a number of times.
    while
     Defines a loop that executes a block of code while a condition is true.
    do...while
     Similar to while, but guarantees at least one execution of the loop.
    for...in
     Defines a loop over the enumerable properties of an object.
    for...of
     Defines a loop over an iterable object (arrays, strings, etc).
-------------------------------------------------------------------------------------------------------------------------------------------------------
    Often this is the case when working with arrays:
Example :- 
    Instead of writing:
    text += cars[0] + "<br>";
    text += cars[1] + "<br>";
    text += cars[2] + "<br>";
    text += cars[3] + "<br>";
    text += cars[4] + "<br>";
    text += cars[5] + "<br>";
-------------------------------------------------------------------------------------------------------------------------------------------------------
*/

// 1. For Loop :- Javascript me for statement ek loop banata hai jisme 3 optional expressions hote hai. [" expr1 code block chalne se pehle sirf ek baar execute hota hai. expr2 code block chalane ki condition define karta hai. expr3 har baar code block execute hone ke baad chalaya jata hai"]
console.log("--------------------- for loop ---------------------");
for (let i = 0; i < 10; i++) {
  console.log("I love code-with-Peps");
}

// 2. While loop :- This loop runs as long as the given condition is true and the loop ends when the condition is false
console.log("--------------------- while loop ---------------------");
let i = 0;
while (i <= 10) {
  console.log("The number is :", i);
  i++;
}

// 3. Do-while loop :- The do while loop is a variant of the while loop. The do while loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.{ kam se kam ek bar to condition true hone se pehle chalega }
console.log("--------------------- do while loop ---------------------");
let j = 0;
do {
  console.log("Position of loop is :", j);
  j++;
} while (j < 10);

// 4. for-in loop :- For...in loop ek object ke enumerable properties par iterate karta hai. Iska use aam taur par object ke keys par loop chalane ke liye kiya jata hai.
console.log("--------------------- for in loop ---------------------");
let students = {
  name: "Sunil",
  age: 22,
  course: "BCA",
};
for (let key in students) {
  console.log("The key is = " + key + " : " + students[key]);
}
// 5. for-of loop :- For...of loop iterable objects jaise arrays, strings, Maps, Sets, aur NodeLists ki values par iterate karta hai.
console.log("--------------------- for of loop ---------------------");
let numArr = [1, 2, 3, 4, 5, 9, 57, 69];
for (let num of numArr) {
  console.log("The number is :", num);
}

console.log(
  "*=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X= Destructuring in JavaScript =X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=X=*"
);
/* The destructuring assignment syntax unpack object properties into variables:
    let {firstName, lastName} = person;
   It can also unpack arrays and any other iterables:
    let [firstName, lastName] = person;
 */
console.log("--------------------- Object Destructuring ---------------------");

// 1. Object Destructuring :- JavaScript me object destructuring ka matlab hai kisi object ke andar ki properties (keys/values) ko easily nikal kar variables me assign karna.
let stdIdentity = { stdName: "Sunil", stdAge: 22, stdCourse: "BCA" };
let { stdName, stdAge, stdCourse } = stdIdentity;
console.log("Original object without destructuring is :", stdIdentity);
console.log("The student name is :", stdName);
console.log("The student age is :", stdAge);
console.log("The student course is :", stdCourse);

console.log("--------------------- Array Destructuring ---------------------");
// 2. Array Destructuring :- JavaScript me array destructuring ka matlab hai array ke andar ki values ko easily alag-alag variables me assign karna.
let numberArr = [4, 8, 16, 32, 64, 128, 256, 512];
let [a, b, c, d, e, f, g, h] = numberArr;
console.log("Original array is :", numberArr);
console.log("The index value of 0 is :", a);
console.log("The index value of 1 is :", b);
console.log("The index value of 2 is :", c);
console.log("The index value of 3 is :", d);
console.log("The index value of 4 is :", e);
console.log("The index value of 5 is :", f);
console.log("The index value of 6 is :", g);
console.log("The index value of 7 is :", h);

console.log("--------------------- String Destructuring ---------------------");
// 3. String Destructuring :- Javascript me string characters ko destructuring karne ke lie matlab string ko easily variables me assign krne ke lie.
let myStr = "CodeWithPeps";
let [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12] = myStr;
console.log("The Original string is :", myStr);
console.log("Destructuring value is :", a1);
console.log("Destructuring value is :", a2);
console.log("Destructuring value is :", a3);
console.log("Destructuring value is :", a4);
console.log("Destructuring value is :", a5);
console.log("Destructuring value is :", a6);
console.log("Destructuring value is :", a7);
console.log("Destructuring value is :", a8);
console.log("Destructuring value is :", a9);
console.log("Destructuring value is :", a10);
console.log("Destructuring value is :", a11);
console.log("Destructuring value is :", a12);

console.log("--------------------- Map Destructuring ---------------------");
// 4. Map Destructuring :- JavaScript me Map ek special object hota hai jisme key-value pairs store hote hain. Direct destructuring Map par possible nahi hoti jaise arrays ya objects me hoti hai. Lekin Map ko iterate karke destructure kiya jata hai.
let studentMap = new Map([
  ["name", "Sunil"],
  ["age", 22],
  ["course", "BCA"],
]);

for (let [key, value] of studentMap) {
  console.log(key + " : " + value);
}

console.log(
  "+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+=+"
);
