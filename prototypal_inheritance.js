// ==========
// Exercise 1
// ==========
var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + " " + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// Don't do this ever for DEMO purposes only!!!!!!
// Even though the person object has a first and last name property because of how Prototypal Inheritance works it will see a first and last name
// property on the john object so it doesnt look further down the prototypal chain.
john.__proto__ = person;
console.log(john.getFullName());
console.log(john.firstname);
console.log(john.lastname);

var jane = {
    firstname: 'Jane'
}

// Don't ever do this demonstration purposes only.
// The this keyword points to jane because that object orginated the call. It searches for first name on the jane object, finds it and returns jane
// But when we search for last name on the jane object there is no lastname on the jane object so it goes up the prototypal chain and finds lastname 
// on the person object so we end up with Jane Default.
jane.__proto__ = person;
console.log(jane.getFullName())

// ==========
// Exercise 2
// ==========
var a = {};
var b = function() {};
var c = [];

console.log(a.__proto__);
console.log(b.__proto__);
console.log(c.__proto__);

console.log(a.__proto__.__proto__);
console.log(b.__proto__.__proto__);
console.log(c.__proto__.__proto__);
