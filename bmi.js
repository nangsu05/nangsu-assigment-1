// BMI Caculator 

// Metric System 
let weight = 47.62; //  kilograms
let height = 1.63; //  meters
let squareOfHeight = 2.6569; // square meter of height 
// My BMI 
let BMI = weight / squareOfHeight;
console.log("My BMI (Metric System): " + BMI.toFixed(2));


// Imperial System 
let Weight = 110; // pounds
let Height = 64.17; // inches
let SquareOfHeight = 4117.7889; // square of height inches
// My BMI 
let bmi = Weight / SquareOfHeight * 703;
console.log("My BMI (Imperial Syatem) = " + bmi.toFixed(2));
