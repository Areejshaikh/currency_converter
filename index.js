#! /usr/bin/env node
import inquirer from "inquirer";
let currency_ = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Converting From",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "amount",
        message: "Enter Your  Amount:",
        type: "number"
    },
    {
        name: "to",
        message: "Converting To",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
]);
console.log(`converting from ${user_answer.to}`);
let fromAmount = currency_[user_answer.from];
let toamount = currency_[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = Math.round(baseAmount * toamount);
console.log(`Your: ${fromAmount} in  ${toamount} is:  ${convertedAmount}`);
