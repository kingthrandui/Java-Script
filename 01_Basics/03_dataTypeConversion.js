let score = "100abc"; //string
console.log(typeof score); //string

//convert string to number
let scoreNumber = Number(score);
console.log(typeof scoreNumber); //number
console.log(scoreNumber); //NaN (Not a Number)

//Another way to convert string to number
let scoreNumber2 = parseInt(score); //parseFloat for decimal numbers
console.log(typeof scoreNumber2); //number
console.log(scoreNumber2); //100

//difference between Number() and parseInt()
//Number() converts the entire string to a number and returns NaN if it encounters any non-numeric characters
//parseInt() parses the string until it encounters a non-numeric character and returns the number parsed up to that point