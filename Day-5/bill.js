let prompt = require("prompt-sync")();

let bill = parseFloat(prompt(" Please enter your bill amount: $"));
let partySize = parseInt(prompt(" How big is your party? "));
let rewards = prompt(" Do you have a rewards card to use? (yes or no) ").toLowerCase();

let discount = 0;
let tip = 0;

if(rewards === "yes"){
    discount = bill * 0.10;
    bill -= discount;
    console.log(" Your rewards have been applied -$" + discount.toFixed(2));
}

if(bill > 50){
    if(partySize >= 6){
        tip = bill * 0.18;
        console.log(" Automatic 18% gratuity for your party: $" + tip.toFixed(2));
    }else{
        tip = parseFloat(prompt(" Please choose the amount you want to tip (15%, 18%, or 20%: "));
        tip = bill * (tip /100);
        console.log(" Tip: $" + tip.toFixed(2));
    }
} else{
    tip = bill * 0.15;
    console.log(" Suggested 15% tip: $" + tip.toFixed(2));
}

let total = bill + tip;
console.log(" Your new final total with tip is: $" + total.toFixed(2));