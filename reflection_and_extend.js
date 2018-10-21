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

// By checking hasOwnProperty we look to see what properties really belong to John so we only return first and last name. Otherwise in the second 
// example we are not checking for john hasOwnProperty so JavaScript goes up the prototypal chain looking logging all properties pointing to john and person
// since we've assigned john's proto to also equal person. Very dangerous but super cool.
for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ": " + john[prop]);
    }  
}

for (var prop in john) {
    console.log(prop + ": " + john[prop]);   
}

var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ", " + this.firstname;
    }
}

var jim = {
    getFirstName: function() {
        return firstname;
    }
}

// What this does is composes or combines these objects. It takes all the properties and methods of jane and jim and adds them directly to john for us.
_.extend(john, jane, jim);