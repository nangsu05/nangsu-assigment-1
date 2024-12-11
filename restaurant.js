// // Restaurant Bill 
let burger = 8.50;
let fries = 3.25;
let soda = 2.00;
let dessert = 5.75;
let service_charge_rate = 0.10; 
let tax_rate = 0.07; 

// Number of people 
let numberOfPeople = 4;

// Total bill 
let total_bill = burger + fries + soda + dessert;
console.log("Total Bill = $ " + total_bill.toFixed(2));

// Service charge 
let service_charge = total_bill * service_charge_rate;
console.log("Service Charge = $ " + service_charge.toFixed(2));

// Total after service charge
let total_with_service_charge = total_bill + service_charge;
console.log("Total with service charge = $ "+total_with_service_charge);

// Tax Cost
let tax_amount = total_with_service_charge * tax_rate;
console.log("Tax Amount = $ " + tax_amount.toFixed(2));

// Final total (after service charge and tax)
let final_total = total_with_service_charge + tax_amount;
console.log("Final Total (with Service Charge and Tax) = $ " + final_total.toFixed(2));

// Split  bill per people
let amount_per_person = final_total / numberOfPeople;
console.log("Amount per person = $ " + amount_per_person.toFixed(2));








