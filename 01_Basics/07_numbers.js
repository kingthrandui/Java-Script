const score = 100; //number
console.log(score); 

const balance = new Number(200); //number object
console.log(balance);

console.log(balance.toString().length); //method to convert number to string
console.log(balance.toFixed(2)); //method to format number to 2 decimal places
console.log(balance.toPrecision(3)); //method to format number to specified length

//Math object

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); //method to format number to locale string

console.log(Math.PI);