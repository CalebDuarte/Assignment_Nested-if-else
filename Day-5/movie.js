// write a js program to calculate movie ticket pricing  
let prompt = require('prompt-sync')();          

let day = prompt(" Is it a weekday or weekend? ").toLowerCase();
let age = parseInt(prompt(" Please enter your age. "));
let time = parseInt(prompt(" What time will your movie be? "));

let price = "";

if( day === "weekend") {
    if(time < 5) {
        price = 10; // matinee
    }else {
        price = 15; // trhis would be evening
    }
} else if( day === "weekday") {
    price = 8; // this would be the bae price
} else {
    console.log(" You have entered an invalid day. ");
}

if( price > 0) {
    if(age >= 65){
        price = price * 0.8; // this would be the senior discount
        console.log(" Our senior dicount has been applied ");
    }

    console.log(" Your final ticket price is $" + price.toFixed(2) );
}