// This is great because without the bind method when we call log name without bind this.getfullname
// It refers to the window object as opposed to the person object
var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {

        var getFullName = this.firstname + " " + this.lastname;
        return getFullName;

    } 
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + " "+ lang2);
    console.log('---------------------');
}

// This does allow us to choose what we want the this keyword to refer to but does not invoke the function. 
// We have to manually invoke or call the function ourselves.
var logPersonName = logName.bind(person);
logPersonName('en');

// Call invokes the function and lets us pass parameters and lets us choose who the window object is.
logName.call(person, 'en', 'es');

// Apply works in the same way but wants an array as opposed to primitive arguments otherwise it will error out.
logName.apply(person, ['en', 'es']);

// Immediately Invokes Function using dot apply.
(function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + " "+ lang2);
    console.log('---------------------');
}.apply(person, ['en', 'es']));



// or

// In this example we apply .bind directly to the logName function
var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {

        var getFullName = this.firstname + " " + this.lastname;
        return getFullName;

    } 
}

var logName = function(lang1, lang2) {

    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + " "+ lang2);
    console.log('---------------------');

}.bind(person);

logName('en', 'es');

// function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullName.apply(person2));

// function currying
function multiply(a, b) {
    return a * b;
}

// Similar or the same as below

function multiplyByTwo(b) {
    var a = 2;
    return a * b;
}

var multiplyByTwo = multiply.bind(this);
console.log(multiplyByTwo(60, 1));

// Function currying is when you create a copy of a function but with some preset parameters