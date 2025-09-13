// ARRAYS

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(typeof numbers); //object

console.log(numbers.length); //length of array
console.log(numbers[0]); //first element
console.log(numbers[2]); //third element

const fruits = ["apple", "banana", "grapes"];
console.log(fruits);
console.log(typeof fruits); //object

const myHeroes = ["Shaktimaan" , "SuperMan","Doga"];

const myarr2 = new Array(1,2,3,4,5);
console.log(myarr2);

// Array methods
myHeroes.push("Batman"); //add element at the end
console.log(myHeroes);

myHeroes.pop(); //remove element from the end
console.log(myHeroes);

myHeroes.unshift("IronMan"); //add element at the beginning
console.log(myHeroes);

myHeroes.shift(); //remove element from the beginning
console.log(myHeroes);

