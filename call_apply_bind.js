// This is great because without the bind method when we call log name without bind this.getfullname
// Refers to the window object as opposed to the person object
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
}

var logPersonName = logName.bind(person);

logPersonName();


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
    console.log('Arguments: ' + lang1 + " " + lang2);
    console.log('---------------------');

}.bind(person);

logName('en', 'es');
