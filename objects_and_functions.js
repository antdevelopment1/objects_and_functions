// Going Over Some Under the Hood Behavior In javaScript.
var person = new Object();

// Computed Member Access Operator are the brackets [] and we put the name in which we trying to locate in memory 
// being "firstname" Since it doesnt exsist yet so when you use the = "Tony" it sogint to create that spot in memory
//  give it that name and this object will get a reference to the address of that location in memory. SO it will know 
// where firstname is in memory and thats going to be a primitive a string so its called a property. A first name property.
person["firstname"] = "Tony";
person["lastname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);

// Uses the dot operator to retrieve the first and last name.
console.log(person.firstname);
console.log(person.lastname);


// Creates a new object and adds three new primitive string properties to the new object
person.address  = new Object();
person.address.street = "111 Main St.";
person.address.city = "New York";
person.address.state = "NY";

// Uses the dot to access the street, city
// Uses brackets to access to property of an object
console.log(person.address.street);
console.log(person.address.city);
console.log(person["address"]["state"]);