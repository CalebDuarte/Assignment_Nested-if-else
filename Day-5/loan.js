// write a js program to check loan eligibility
let prompt = require('prompt-sync')();

let age = parseInt(prompt(" Please enter your age here. "));
let income = parseInt(prompt(" What is your annual income? "));
let credit = parseInt(prompt(" Please enter your credit score here "));

if( age >= 21){
    if(income >= 30000){
        if(credit >= 650){
            console.log(" You have been approved!! You are eligible for a loan! ");
        } else{
            console.log(" Rejected: Unfortunately your credit score is too low it must be 650 or above. ");
        }
    } else {
        console.log(" Rejected: Unfortunately your annual income is too low it must be $30,000 or higher. ");
    }
} else{
    console.log(" Rejected: Must be 21 years or older. ");
}