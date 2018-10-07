var greet = 'Hello!';
var greet = 'Hola';
var greet = 'Bonjour';

console.log(greet);

// Object created as a container for properties and methods that we want to use to avoid name collisions. 
var english = {};
var spanish = {};

english.greet = 'Hello!';
spanish.greet = 'Hola!'

console.log(english.greet)

// This line erros because greetings does not exsist. We have left to right associativity and english.greet is undefined.
// So when we call .greet as well we are saying undefined.greet which results in an error. We cannot set the property greet 
// of undefined. Cool right?
english.greetings = {}; // Now we can call on the line below.
english.greetings.greet = 'Hello!';
console.log(english);

// We could also instead of using the dot operator create an object on the fly that fakes namespaces
var french = {
    greetings: {
        basic: 'Bonjour'
    }
};
console.log(french.greetings.basic);