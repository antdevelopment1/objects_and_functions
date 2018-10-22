// We have to use the "this" keyword so that we are referencing the object. If we didn't us ethe this keyword
// it would look for it in the greet methods function context when executed and wouldn't find it and then go out to 
// the global execution context and it wouldn't find firstname there because it's inside the person object.
// Objects don't create new execution context
var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
}

// Object.create creates an empty object with it's prototype pointing to whatever you passed in to Object.create

var john = Object.create(person);
console.log(john)
console.log(john.greet());
// The pattern is to overide whatever we want to by simply adding the properties and methods yourself to the created object.
john.firstname = 'John';
john.lastname = 'Doe';
john.greet = function () {
    return 'Hi ' + this.firstname + " " + this.lastname;
}
console.log(john);
console.log(john.greet())

// ===================
// What Is A Polyfill?
// ===================
// Code that adds a feature which the engine may lack
// What if we we'd like to use Object.create in our project but we are forced to support olders browsers that don't have this built in so....
// POYLFILLS

// Checks to see if Object.create even exists
if (!Object.create) {
    // Create will get added to the base object which is on the global object
    Object.create = function (o) {
        // We take one aregument and make sure that theres one argument
        if (this.arguments.length > 1) {
            throw new Error('Object.create implementation' + ' only accepts the first parameter.');
        }
        function F() {}
        F.prototype = o;
        return new F();
    };
}
var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname;
    }
}
var john = Object.create(person);
john.firstname = 'Johnny';
john.lastname = "Doughy";
console.log(john);



