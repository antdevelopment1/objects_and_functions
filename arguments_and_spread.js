// function greet(firstname, lastname, language) {
//     console.log(firstname);
//     console.log(lastname);
//     console.log(language);
//     console.log('--------------');
// }
// greet();
// // We return undefined as opposed to an error because JavaScript doesnt care. It saves the values as undefined for the time being.
// // Memory space has been set up for those parameters 
// greet('John');
// greet('John', 'Doe');
// greet('John', 'Doe', 'Spanish');

// We can do this as an alternative. We are setting default values for incase nothing is passed to the parameter
function greetAgain(firstname, lastname, language, ...other) {

    language = language || 'en';

    // Checks the length of the arguments passed to confirm arguments have been passed
    if (arguments.length === 0) {
        console.log('Missing parameters!');
        console.log('---------------');
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments)
    // This is the first element in this array like structure
    console.log('arg 0 ' + arguments[0])
    console.log('--------------');
}
greetAgain();
greetAgain('John');
greetAgain('John', 'Doe');
greetAgain('John', 'Doe', 'Spanish');
// Arguments gives us an array like list of all the arguments we have passed to our function.