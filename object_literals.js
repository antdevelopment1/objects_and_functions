// Touching on topics object literals
var person = new Object();

// Short hand for code above
var anotherPerson = {};
console.log(person, anotherPerson);

// Two examples of ways to write the same result for objects
// Example 1:
var newPerson = {
    "firstnsme": "Tony",
    "lastname": "Alecia"
}
console.log(newPerson);

// Example 2:
newestPerson = new Object();
newestPerson.firstname = "Tony";
newestPerson.lastname = "Alecia";
console.log(newestPerson);
console.log(newestPerson["firstname"], newestPerson["lastname"]);

// Creates and object on the fly and adds key value pairs containing another object
var person2 = {
    "firstname": "Tony",
    "lastname": "Alecia",
    "adresss": {
        "street": "111 Main St.",
        "city": "New York",
        "state": "NY"
    }
};
console.log(person2);
// Testing to see commits
