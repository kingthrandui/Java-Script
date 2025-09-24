// console.log(`Hello World`);
// console.log(`I like pizza`);
// window.alert(`I really like pizza`);

// document.getElementById("myH1").textContent= "Hello World";
// document.getElementById("myP").textContent= "I like pizza";

// let x =123;
// console.log(x)
// let age = 18;
// console.log(` you are ${age} years old`);

// let name = "naman";
// console.log(typeof name);

// let fullname = "Aman kumar";
// let isstudnt = true;
// let marks = 98.5;

// document.getElementById("p1").textContent = `Your name is ${fullname}`;
// document.getElementById("p2").textContent = `You are  a student: ${isstudnt}`;
// document.getElementById("p3").textContent = `Your marks are: ${marks}`;   

// let username = window.prompt("Enter your name");
// // console.log(username);

// //Professional way html textbox
// let username;
// document.getElementById("Mysubmit").onclick = function(){
//     username = document.getElementById("Mytext").value;
//     console.log(username);
//     document.getElementById("h1").textContent = `Welcome ${username}`;

const decrementbtn = document.getElementById("Decrementbtn");
const incrementbtn = document.getElementById("Incrementbtn");
const resetbtn = document.getElementById("Resetbtn");
const Countlabel = document.getElementById("Countlabel");

let count = 0;
incrementbtn.onclick = function(){
    count++;
    Countlabel.textContent = count;
};
decrementbtn.onclick = function(){
    count--;
    Countlabel.textContent = count;
};
resetbtn.onclick = function(){
    count=0;
    Countlabel.textContent = count;
}
