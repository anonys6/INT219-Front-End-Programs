// const paraEle = document.getElementById("first-para");

// paraEle.textContent = 'This is a new content';



// // let name = prompt("What is your name?");
// // if (name) {
// //     alert("Hello, " + name);
// // } else {
// //     alert("No name entered.");
// // }

// // arithmetic operators in javascript
// let x = 5;
// let y = 2;

// console.log(x, " + ", y , " = ", x + y);
// console.log(x, " - ", y , " = ", x - y);
// console.log(x, " * ", y , " = ", x * y);
// console.log(x, " / ", y , " = ", x / y);
// console.log(x, " % ", y , " = ", x % y);
// console.log(x, "++ ", " = ", x++);
// console.log(x, "-- ", " = ", x--);



// let num1 = prompt("Enter first operand:");
// let num2 = prompt("Enter second operand:");

// num1 = parseInt(num1);
// num2 = parseInt(num2);

// let sum = num1 + num2;

// alert("The sum is: " + sum);pi



const price = [];

price[0] = Number(prompt("Enter price of first item:"));
price[1] = Number(prompt("Enter price of second item:"));
price[2] = Number(prompt("Enter price of third item:"));

price[2] = price[2] * 2;

let totalPrice = price[0] + price[1] + price[2];
let avgPrice = totalPrice / 3;

alert("Price before discount: " + totalPrice);

alert("Average before discount: " + avgPrice);

alert('After discount (using promo code: "I got 5 on it"): ' + (totalPrice - 5));