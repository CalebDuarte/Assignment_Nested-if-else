let prompt = require("prompt-sync")();

let base = 50; // base price per month
let memberType = prompt(" What type of membership would you like? (Basic, Premium, or VIP): ").toLowerCase();
let age = parseInt(prompt(" How old are you? "));
let annual = prompt(" Will you be signing up with our annual contaract? (yes or no): ").toLowerCase();

let total = base;

if( memberType === "basic"){
    console.log(" You have selected our basic membership ($50/month) ");
} else if( memberType ==="premium"){
    total+= 30;
    console.log(" You have selected our Premium membership ($80/month, group classes included) ");
}else if(memberType === "vip"){
    total += 70;
    console.log(" You have selected our VIP mebership plan ($120/ month, includes everything from permium as well as a personal trainer.) ");   
} else{
    console.log(" INVALID INPUT ");
    total= 0;
}

if(total > 0){
    if(age < 25){
        total = total * 0.8;
        console.log(" Student discount applied (20% off). ");
    }

    if(annual === "yes"){
        let annualCost = total * 10
        console.log(" You have selected to opt in to our annual contract you get 2 months free!!! ");
        if( memberType === "premium" || memberType=== "vip"){
            console.log(" You get a bonus free gym bag for being a loyal premium / vip member!!");
        }

        console.log("Your total annual cost is: $" + annualCost.toFixed(2));
        console.log(" (Equivalent to $" + (annualCost / 12).toFixed(2) + " per month.)");
    } else {
        console.log(" Your monthly total has added up to : $" + total.toFixed(2));
    }
    
}