#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter Your First Number", type: "number", name: "firstNum"},
  { message: "Enter Your Second Number", type: "number", name: "secondNum"},
  { message: "Select anyone of the following operator to perform next action.",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"]},
]);

console.log(answer);


// Conditional Statement
if (answer.operator === "Addition") {
    console.log (answer.firstNum + answer.secondNum);    //   + for Addition
}
else if (answer.operator === "Subtraction") {
    console.log (answer.firstNum - answer.secondNum);    //   - for Subtraction
}
else if (answer.operator === "Multiplication") {
    console.log (answer.firstNum * answer.secondNum);    //   × for Multiplication
}
else if (answer.operator === "Division") {
    console.log (answer.firstNum / answer.secondNum);    //   ÷ for Division
}
else {
    console.log("Please select a valid operator.")
}