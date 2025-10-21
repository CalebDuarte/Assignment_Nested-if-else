// write a js program to calculate an employee bonus

let prompt = require("prompt-sync")();

let time = parseInt(prompt(" How many years have you worked for this company? "));
let performance = parseInt(prompt(" What has been your performance rating from a scale of 1-5? "));
let head = prompt(" Are you a department head? ");
let baseBonus = 1000; // base bonus price

if(time >= 5)
{
    baseBonus = baseBonus * 1.5; // this would increase by 50%

    if( performance === 5){
        baseBonus += 2000;
    } else if(performance === 4){
        baseBonus += 1000;
    } else {
        baseBonus +=0; // anything 3 and under
    }
} else {
    if (performance === 5){
        baseBonus += 2000; // only if you have <5 years experiance
    }
}

if (head === "yes"){
    baseBonus = baseBonus * 1.25; // department heads get an extra 25%
}

console.log(" Your total bonus is : $" + baseBonus.toFixed(2));