// Dates

let myDate = new Date();
// console.log(myDate); //current date and time

// console.log(myDate.toString()); //convert date to string
// console.log(myDate.toDateString()); //convert date to date string
// console.log(myDate.toLocaleString()); //convert date to time string
// console.log(myDate.toISOString()); //convert date to ISO string


let mycreateddate  = new Date(2024, 1, 1);
console.log(mycreateddate.toDateString()); //1 Feb 2024


let mycreateddate2  = Date.now();
console.log(mycreateddate2); //current date
