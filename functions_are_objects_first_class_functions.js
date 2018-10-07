function greet() {
    console.log('Hi');
}

// This is a property attached to the function just like you can attach a property to any object because 
// in javascript functions are objects
greet.language = 'english';
console.log(greet.language);