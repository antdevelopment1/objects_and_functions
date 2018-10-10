// function statment
function greet(name) {
    console.log('Hello ' + name);
}

greet('John');

// function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
}
greetFunc('John');

// Using a Immediately Invoking Function Expression
// In this case returns the value of a string
var greeting = function(name) {
    return 'Hello ' + name;
}('John');

console.log(greeting); 

// Anything inside of parenthesis is an expression so this is a function expression when we wrap it in quotes
// Otherwise it'll error out. This is also a IIFE
var firstname = 'John';
(function(name) {
    var greeting = 'Inside IFEE: Hello';
    console.log(greeting + " " + name);
}(firstname));
// Can be invoked inside or outside the parenthesis