// Example of a function statement. When its run or evaluated it doesnt result in a value. 
// The function is palced into memory but its just a statement. It doesnt return a value until the 
// function is called.
function greet() {
    console.log('Hi I am greet');
}
greet();
// // The function above is also available to us to call before writing the function statement itself because the function is in memory
// // When the Jvascript engine parses through the code.

// // Creates a function object example of a function expression. When this code is run it results in an object being created. It returns an object essentially.
var anonymousGreet = function() {
    console.log('Hi i am anonomous');
}
anonymousGreet();

// If you called the function expression about the actual function expression you would get an error saying undefined. 
// For example
// anonymousGreet();
// var anonymousGreet = function() {
//     console.log('Hi i am anonomous');
// }
// This greet function statement is hoisted. When the javascript engine sees the word function on a new line by itself...
// it says, you're creating a function and will put it into memory but when we look at anonymousGreet we see a variable and .../
// By default it puts all variables to undefined and when we try to invoke it, its trying to invoke an undefined variable