// Efficiency and Trip Cost
let distance = 300; 
let fuel_efficiency = 25; 
let fuel_cost = 3.75;

// Fuel Needed
let fuel_needed = distance / fuel_efficiency;
console.log("Fuel Needed = " + fuel_needed + " gallons");

// Trip Cost
let trip_cost = fuel_needed * fuel_cost;
console.log("Total Trip Cost = $ " + trip_cost); 
