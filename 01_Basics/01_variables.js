const accountName = "JohnDoe";
let accountBalance = 1000;

console.log("Account Name:", accountName);
console.log("Account Balance:", accountBalance);

// Trying to reassign a constant variable will result in an error
// accountName = "JaneDoe"; // Uncommenting this line will throw an error

// You can reassign a let variable
accountBalance += 500;
console.log("Updated Account Balance:", accountBalance);

var transactionCount = 5; // 'var' is function-scoped and can be redeclared
//preffer not to use var because of issue in block scope and function scope

console.log("Transaction Count:", transactionCount);

// Displaying all variables in a table format

console.table({accountName ,accountBalance,transactionCount});
console.log(typeof accountName); //string