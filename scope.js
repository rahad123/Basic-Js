//Before understanding the scope, we have to understand the basics of keywords(var, let, const).
//Basically, they are variables. Before 2015 everyone was using (var) keyword to assign a variable. But, when ES6 came; They introduced two types of keywords (let and const).

//Before ES6 there were 2 types of scope. But, right now there are 3 types of scope. 
//Let's discuss with expample

// Before ES6 javascript had 2 scopes
//1. Function Scope 
//2. Global Scope

//But, right now, there are 3 types of scopes
//1.Block scope
//2.Function scope
//3.global scope

//1. Function Scope with (var) keyword

function myFunction() {
    var myName = "Rahad"; 
}

// But, if we declare the same variable(myName) in Globally and the same variable under this function..?

var myName = "Rahad";
function myFunction() {
    var myName = "Rahad";
}
var myName = "Rahad"; // the will be the answer.

console.log(myName); 

//But, if we use let instead of this, and it will show us Syntax error.
//Important - var variables can be updated and re-declared within its scope.
//let variable can be updated but not be re-declared.
//const variables can neither be updated nor be re-declared.

function myFunction() {
    let myName = "Rahad"; 
}

function myFunction() {
    const myName = "Rahad"; 
}

//2. Block scope

//let and const these keywords provide Block Scope in javascript.
//variables declared inside a {} block cannot be accessed from outside of the block.
//Variables declard with the var keyword can not have block scope, and can access outside of the block.

{
    let value = 5; // cannot access from outside.
}

//. Local scope

//variables declared within a javascript function, then it called local varialbe. 

//3. Global scope

// which variables are declared without scope that is called global scope. that means outside of the function.

let name = "rahad"; // global varialbe

function myFunction() {
    
}



