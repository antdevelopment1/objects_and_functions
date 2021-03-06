// ===========
// Exercies 1
// ===========
// Function Constructors
// function Person () {
//     console.log(this);
//     this.firstname = 'John';
//     this.lastname = 'Doe';
//     console.log('This function is invoked');

//     // return {greeting: 'I got in the way.'};
// }

// var john = new Person();
// var jane = new Person();

// console.log(john);
// console.log(jane);

// ===========
// Exercies 2
// ===========


// We are simply calling the Person function below but by adding new in front of person we chnage the value of where 'this' and what is returned.
// We are constructing objects using functions and that is a function constructor. A normal function that is used to construct objects.
// When we put the new keyword in front of a function call, the this variable which is created during the creation phase of the execution context,
// it points to a brand new empty object. And that object is returned from the function automatically when the function finishes execution unless we have a return value inside the Person object
// function Person (firstname, lastname) {
//     console.log(this);
//     console.log('This function is invoked');
//     this.firstname = firstname;
//     this.lastname = lastname;
   

//     // return {greeting: 'I got in the way.'};
// }

// Person.prototype.getFullName = function() {
//     return this.firstname + " " + this.lastname;
// }
// var john = new Person('John', 'Doe');
// var jane = new Person('Jane', 'Doe');

// console.log(john.getFullName());
// console.log(jane.getFullName());

// Person.prototype.getFormalFullName = function() {
//     return this.lastname + " " + this.firstname;
// }
// console.log(john.getFormalFullName());
// console.log(jane.getFormalFullName());

// Any object that we create with the Person function sometime later we can features to all of these objects at once by using the .prototype property
// of the function constructor. We can give all these all access to a new method at one time

// Do not omit the new keyword before a function constructor. Javascript will still try to execute the Person function causing your new objects to be undefined
// Once we call a method of a function it will also error because its a function not an object. It will not go up the prototypal chain

// ==========
// Exercise 3
// ==========
String.prototype.isLengthGreaterThan = function (limit) {
    return this.length > limit;
}
// This works because this string we converted to an object automatically so now every and any string we pass has access to the isLengthGreaterThan method.
// Very powerful
console.log("John".isLengthGreaterThan(3));

// // We can NOT do the same with numbers
// // Though JavaScript is nice enough to convert a string into an object automatically will not convert a number into an object automatically
// Number.prototype.isPositive = function() {
//     return this > 0;
// }
// // console.log(3.isPositive());
// // However we can do this...
// var a = new Number(3);
// console.log(a.isPositive());

// ==========
// Exercise 4
// ==========
// Dangerous Mental Note
// By using built in function constructors for creating prmitives you arent really creating primitives and strange things can happen during comparison with operators and coersion.
// Its better in general to not use the built in constructors. Use literals, use the actual primitive values unless you absolutly have to. Understand any type of comparison has to be the same type.
// var a = 3;
// var b = new Number(3);
// console.log(a == b);
// console.log(a === b);

// // We can try to use them for conversion sometimes for example
// var c = Number("3");
// console.log(c);
// But understand the difference with c we are calling the Number function and the example above we are using the new keyword in front of the function and creating an object

// ==========
// Exercise 5
// ==========
// In the case of arrays don't use for in. Use a standard for loop is safe. Iterating over all properties is not safe because arrays are objects and we can iterate down into
// the prototype so this generally avoided because arrays are objects in javascript and their items are added properties.
Array.prototype.myCustomFeature = 'cool!';
var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}

