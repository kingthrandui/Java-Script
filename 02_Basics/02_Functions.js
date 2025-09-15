// functions - A block of code that performs a specific task and can be invoked when needed
function MyName(msg){//msg === parameter
    console.log(msg);
}

MyName("Hey you are learning javaScript"); //function invocation or function call);with argument

function sum(num1,num2){//num1,num2 are local variables or parameters
    return num1 + num2;
}

console.log(sum(5,10)); //15

//********************************* ARROW FUNCTIONS **********************************/
//compact way of writting  functions
const arrowMultiply = (a,b)=>{
    return a*b;
}

console.log(arrowMultiply(5,10)); //50

//if there is only one statement in the function body we can remove the curly braces and return keyword
const arrowMultiply2 = (a,b)=> a*b;

function vowelCount(str){
    let count = 0;
    str = str.toLowerCase();
    for(let i = 0 ; i<str.length;i++){
        switch(str[i]){
            case 'a': count++;break;
            case 'e': count++;break;
            case 'i': count++;break;
            case 'o': count++;break;
            case 'u': count++;break;
        }
    }
    console.log(count);
}
vowelCount("Hello World"); //3

//************************************** FOR EACH LOOPS IN ARRAYS */
// agar kisi function ko object ke sath associate karde to vo method ban jata hai
// arr.forEach(callBack function-a function which is passed as an argument to another function)

let arr = [1,2,3,4,5];

arr.forEach(function printSquare(num){
    console.log(num*num);
})//1 4 9 16 2

arr.forEach((num,idx)=>console.log(num,idx));//1 4 9 16 25

//Higher order function - A function that takes another function as an argument or returns a function as a result

//Some  Array methods

//MAP ->creates a new array by applying a function to each element of the original array

let numbers = [1,2,3,4,5];
newaaray = numbers.map((num=>{
    console.log(num);
}))

//FILTER -> creates a new array with all elements that pass the test implemented by the provided function

let filteredArray = numbers.filter(num=>num>2);
console.log(filteredArray);//[3,4,5]

//REDUCE -> executes a reducer function on each element of the array, resulting in a single output value

let sum1 = numbers.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(sum1);//15

let largest = numbers.reduce((max,current)=>current>max?current:max,0);
