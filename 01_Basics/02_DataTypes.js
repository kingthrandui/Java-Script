"use strict"; //treat all js code as newer version
// alert("Hello World"); //we use console.log instead of alert , we are using nodejs not browser
console.log(3+3) ;
console.log("Hello World");

let name = "John"; //string 
let age = 30; //number
let isMember = true;

// numeber range in js 2 to the power of 53
let bigNumber = 9007199254741991n; //bigint

let undefinedVar; //undefined
let nullVar = null; //null it is stand alone value
//symbol is used to create unique identifiers
let sym = Symbol("unique");

// object is used to store collections of data
console.log(typeof null); //object //this is a bug in js
console.log(typeof undefined); //undefined


let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};