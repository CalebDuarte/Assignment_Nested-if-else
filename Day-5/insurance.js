let prompt = require("prompt-sync")();

let age = parseInt(prompt(" Please enter your age: "));
let accidents = prompt(" Have you had any accidents? (yes or no) ").toLowerCase();
let experiance = "";
let multiCar = "";

let premium = 1000; // this nis my base price

if(age < 25){
    premium += 500;

    if(accidents === "yes"){
        premium += 300;
    }
} else{
    experiance = parseInt(prompt(" How many years of driving experiance do you have? "));

    if(experiance < 5){
        premium += 200;
    } else if (experiance >= 5 && accidents === "no"){
        premium -= 150;
    }
}
if(premium > 1500){
    multiCar = prompt(" Do you own multiple cars? (yes or no) ").toLowerCase();

    if(multiCar === "yes"){
        premium = premium * 0.9;
        console.log(" You recive our multi car discount (10% off)!!! :) ");
    }
}

console.log(" Your total insurance premium is now: $" + premium.toFixed(2));