let prompt = require("prompt-sync")();
let inStock = prompt(" Is your item in stock? (yes or no): ").toLowerCase();
let base = 100; // example base price

if (inStock === "yes") {
  let payment = prompt(" How will you be paying? (credit card or paypal): ").toLowerCase();

  if (payment === "credit card") {
    let cardVal = prompt(" Is the card you are using valid? (yes or no): ").toLowerCase();

    if (cardVal === "yes") {
      let shipping = prompt(" What shipping type would you like? (domestic or international): ").toLowerCase();

      if (shipping === "domestic") {
        base += 10;
        console.log(" Order processed! Your total will be $" + base);
      } else if (shipping === "international") {
        let country = prompt(" Enter what country you want shipping to: ").toLowerCase();

        if (country === "canada" || country === "japan") {
          base += 25;
          console.log(" Your international order has been approved. Your total will be $" + base);
        } else {
          console.log(" We do not ship to your country.");
        }
      } else {
        console.log(" Invalid shipping type.");
      }

    } else {
      console.log(" Payment declined: Invalid card.");
    }

  } else if (payment === "paypal") {
    let paypalVer = prompt(" Is your PayPal account verified? (yes or no): ").toLowerCase();

    if (paypalVer === "yes") {
      let shipping = prompt(" What shipping type would you like? (domestic or international): ").toLowerCase();

      if (shipping === "domestic") {
        base += 10;
        console.log(" Your order has been processed. Total: $" + base);
      } else if (shipping === "international") {
        let country = prompt(" Enter your country: ").toLowerCase();

        if (country === "canada" || country === "japan") {
          base += 25;
          console.log(" Your international order has been approved. Your total will be $" + base);
        } else {
          console.log(" We do not ship to your country.");
        }
      } else {
        console.log(" Invalid shipping type.");
      }

    } else {
      console.log(" Payment declined: Unverified PayPal account.");
    }

  } else {
    console.log(" You have entered an invalid payment method.");
  }

} else {
  console.log(" Sorry, item is out of stock.");
}
