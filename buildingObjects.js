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


// We are simply calling the Person function below but by adding new in front of person we chnage the value of where 'this' and what is returned.
// We are constructing objects using functions and that is a function constructor. A normal function that is used to construct objects.
// When we put the new keyword in front of a function call, the this variable which is created during the creation phase of the execution context,
// it points to a brand new empty object. And that object is returned from the function automatically when the function finishes execution unless we have a return value inside the Person object
function Person (firstname, lastname) {
    console.log(this);
    console.log('This function is invoked');
    this.firstname = firstname;
    this.lastname = lastname;
   

    // return {greeting: 'I got in the way.'};
}

var john = new Person('John', 'Doe');
var jane = new Person('Jane', 'Doe');

console.log(john);
console.log(jane);