// Grocery Shopping 

let bread = 2.50;
let milk = 3.00;
let eggs = 2.00;
let cheese = 4.50;
let apples = 5.00;
let chicken = 8.00;
let rice = 3.50;
let butter = 2.75;
let juice = 3.25;
let discount_rate = 0.1;
let tax_rate = 0.07;

// Total cost 
let total = bread + milk + eggs + cheese + apples + chicken + rice + butter + juice ;
console.log("Total = $ " + total);

// Discount amount 
let discount_amount = total * discount_rate;
console.log("Discount Amount = $ " + discount_amount);


// Total After Discount 
let totalAfterDiscount = total - discount_amount;
console.log("Total After Discoutn = $ " + totalAfterDiscount);

// Tax cost 
let tax_amount = totalAfterDiscount* tax_rate ;
console.log("Tax Amount = $ " + tax_amount);

// Final Total Cost 
let finalCost = totalAfterDiscount + tax_amount;
console.log("Final Total Cost = $ " + finalCost);









