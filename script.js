//// 1. JavaScript Type conversion
// const inputNumber = "7500";
// console.log(inputNumber + 10);

// console.log(inputNumber);
// console.log(Number(inputNumber), inputNumber);
// console.log(typeof inputNumber);
// console.log(typeof Number(inputNumber));

// const birthYear = 1992;
// console.log(birthYear);
// console.log(typeof birthYear);
// console.log(String(birthYear));
// console.log(typeof String(birthYear));

// const firstName = "Adrita";
// console.log(Number(firstName));
// console.log(typeof Number(firstName));

// const inputNumber = "7500";
// const birthYear = 1992;
// const firstName = "Adrita";
// console.log(Boolean(inputNumber));
// console.log(Boolean(birthYear));
// console.log(Boolean(firstName));

//// 2. JavaScript Type Coercion
// let bookNumber = 5;
// console.log("I have " + bookNumber + " Story Books");
// console.log("20" - 5);
// console.log("20" - "5");
// console.log("20" + 5);
// console.log(20 + "5");
// console.log("20" + "5");
// console.log("20" + 5, "20" + " " + 5);
// console.log("20" * 5);
// console.log("20" / 5);

// console.log(5 + 10 + 5 + "5");
// console.log("100" - "50" + 10);
// console.log("100" - "50" + "10");
// console.log("15" - "5" - "4" - "3" + 5);
// console.log("15" - "5" - "4" - "3" + "5");

//// 3. JavaScript Truthy & Falsy Value
// 0
// ""
// null
// undefined
// NaN

// console.log(0);
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(1));
// console.log(Boolean("Adrita"));
// console.log(Boolean("123"));

// const job = 1;
// if (job) {
//   console.log("I have a good job!");
// } else {
//   console.log("Looking for a good job");
// }

// if (true) {
//   console.log("I have a good job!");
// } else {
//   console.log("Looking for a good job");
// }

// if (false) {
//   console.log("I have a good job!");
// } else {
//   console.log("Looking for a good job");
// }

// let salary;
// if (salary) {
//   console.log("My salary is set");
// } else {
//   console.log("My salary isn't set");
// }

// let salary = 15000;
// if (salary) {
//   console.log("My salary is set");
// } else {
//   console.log("My salary isn't set");
// }

//// 4. Conditional Statement
// let earning = 9000;
// if (earning > 35000) {
//   console.log("His earning is good!");
// } else if (earning > 20000) {
//   console.log("His earning isn't bad!");
// } else if (earning > 10000) {
//   console.log("Write something");
// } else {
//   console.log("His earning isn't good enough!");
// }

// let today = "Friday";
// if (today === "Saturday") {
//   console.log("Today 9pm we have a main live class!");
// } else if (today === "Sunday") {
//   console.log("Today 9pm we have a support live class!");
// } else if (today === "Monday") {
//   console.log("Today 9pm we have a main live class!");
// } else if (today === "Tuesday") {
//   console.log("Today 9pm we have a support live class!");
// } else if (today === "Wednesday") {
//   console.log("Today 9pm we have a support live class!");
// } else if (today === "Thursday") {
//   console.log("Today 9pm we have a main live class!");
// } else {
//   console.log("Today is our weekend!");
// }

//// 5. Nested Conditional Statement
// const x = 10;
// if (x >= 10) {
//   if (x == 10) {
//     console.log("X is equal to 10!");
//   } else {
//     console.log("X is greater then 10!");
//   }
// } else {
//   console.log("X is lower then 10!");
// }

//// 6. Switch Statement
// let day = "Friday";

// switch (day) {
//   case "Saturday": // Day === "Saturday"
//     console.log("Today 9pm we have a main live class!");
//     break;
//   case "Sunday": // Day === "Sunday"
//     console.log("Today 9pm we have a support live class!");
//     break;
//   case "Monday": // Day === "Monday"
//     console.log("Today 9pm we have a main live class!");
//     break;
//   case "Tuesday": // Day === "Tuesday"
//     console.log("Today 9pm we have a support live class!");
//     break;
//   case "Wednesday": // Day === "Wednesday"
//     console.log("Today 9pm we have a main live class!");
//     break;
//   case "Thursday": // Day === "Thursday"
//     console.log("Today 9pm we have a support live class!");
//     break;
//   default:
//     console.log("Today is our weekend!");
// }
