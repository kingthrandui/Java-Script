const name ="naman"
const repoCount = 50;
//console.log("Hello " + name + " you have " + repoCount + " repos");
console.log(`Hello &{name} you have &{repoCount} repos`); //template string or template literal

const fullName = new String("naman singh"); //string object
console.log(fullName);
console.log(typeof fullName); //object

console.log(fullName[0]);

//string properties and methods
console.log(fullName.length); //property
console.log(fullName.toUpperCase()); //method
console.log(fullName.charAt(0)); //method
console.log(fullName.indexOf("s")); //method
console.log(fullName.lastIndexOf("n")); //method
console.log(fullName.includes("singh")); //method
console.log(fullName.slice(0,5)); //method
console.log(fullName.split(" ")); //method
console.log(fullName.replace("naman","rohan")); //method

//trim() method removes whitespace from both ends of a string.
const stringWithSpaces = "   Hello World   ";
console.log(stringWithSpaces.trim()); // "Hello World"

//Example of method chaining
const example = "   JavaScript is awesome!   ";
const result = example.trim().toLowerCase().replace("awesome", "great");
console.log(result); // "javascript is great!"