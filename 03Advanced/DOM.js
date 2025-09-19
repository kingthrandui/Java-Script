/*
Dom->when a webpage is loaded browser creates an document object model of the page
window-> document->html
window.document
console.dir(window.document)

DOM->manipulstion->
*/
let heading=document.getElementById("heading")
console.log(heading)
let headings = document.getElementsByClassName("newheading")// returns html collection
console.log(headings)

let elements = document.querySelector("p");//first elements
console.dir(elements)