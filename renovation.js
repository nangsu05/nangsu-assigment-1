let livingRoomArea = 200; 
let kitchenArea = 150; 
let bathroomArea = 100; 

let livingRoomCostPerSqFt = 15; 
let kitchenCostPerSqFt = 20; 
let bathroomCostPerSqFt = 25; 

// Cost for Each Area
let livingRoomCost = livingRoomArea * livingRoomCostPerSqFt;
console.log("Living Room Cost = $ " + livingRoomCost);

let kitchenCost = kitchenArea * kitchenCostPerSqFt;
console.log("Kitchen Cost = $ " + kitchenCost);

let bathroomCost = bathroomArea * bathroomCostPerSqFt;
console.log("Bathroom Cost = $ " + bathroomCost);

// Total Renovation Cost
let totalRenovationCost = livingRoomCost + kitchenCost + bathroomCost;
console.log("Total Renovation Cost = $ " + totalRenovationCost);
