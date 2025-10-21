// write a js program to calculate a hotel room price
let prompt = require('prompt-sync')();

let room = prompt(" What type of room would you like? (Standard, Deluxe, Suite): ");
let season = prompt(" What season will you be staying with us? (Peak, Regular, Off-peak): ");
let timeLength = parseInt(prompt(" How long will you be staying with us? "));
let status = prompt(" What is your loyalty status? (None, Silver, Gold, Platinum): ");

// base price
let basePrice = 100;
let total = "";

// nested start
if (room === "Standard" || room === "standard" || room === "Deluxe" || room === "deluxe" || room === "Suite" || room === "suite") {

    if (room === "Deluxe" || room === "deluxe") {
        basePrice += 50;
    } else if (room === "Suite" || room === "suite") {
        basePrice += 150;
    } else {
        basePrice += 0; // price for a standard room
    }

    if (season === "Peak" || season === "peak" || season === "Regular" || season === "regular" || season === "Off-peak" || season === "off-peak") {

        if (season === "Peak" || season === "peak") {
            basePrice *= 1.5; // increase by 50%!!
        } else if (season === "Off-peak" || season === "off-peak") {
            basePrice *= 0.8; // 20% discount!!
        }

        total = basePrice * timeLength;

        if (timeLength >= 7) {
            if (timeLength >= 14) {
                total *= 0.75; // 25% off!!
            } else {
                total *= 0.85; // 15% off!!
            }
        }

        // status check
        if (status === "None" || status === "none" || status === "Silver" || status === "silver" || status === "Gold" || status === "gold" || status === "Platinum" || status === "platinum") {

            if (status === "Silver" || status === "silver") {
                console.log(" You get a free breakfast ($" + (20 * timeLength) + " value). ");
            } else if (status === "Gold" || status === "gold") {
                console.log(" You get a free breakfast and a free room upgrade! Congratulations! ");
            } else if (status === "Platinum" || status === "platinum") {
                console.log(" You get a free breakfast as well as free parking and an extra 10% off! ");
                total *= 0.9; // extra discount for platinum customers!!!
            }

        } else {
            console.log(" Invalid loyalty status has been entered. Please try again. ");
        }

    } else {
        console.log(" You have entered an invalid season. Please try again. ");
    }

} else {
    console.log(" You have entered an invalid room type. Please try again. ");
}

console.log(" Your total for " + timeLength + " nights is: $" + total.toFixed(2));
