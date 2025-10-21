// Write a js program to convert hours to minutes and seconds
let prompt = require("prompt-sync")();
let hour = parseInt(prompt(" Enter the number of hours you want to convert "));
let sec = 3600 * hour;
let min = 60 * hour;


 console.log(`Your converted time is ${hour} hours = ${min}mins = ${sec}seconds`) 