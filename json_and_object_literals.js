var objectLiteral = {
    firstname: 'Mary',
    isProgrammer: true
}

console.log(objectLiteral);


// In JSON property names have to be wrapped in quotes and do not have to wrapped in quotes for regular JvaScript.
// JSON is technically a subset of the object literal syntax meaning anything that is JSON valid is also valid javascript obeject literal syntax.
// But not all object literal syntax is valid JSON. JSON has stricter rules. 

// Converts object above into proper JSON syntax
console.log(JSON.stringify(objectLiteral));

// Converts JSON syntax to acceptable Javascript syntax
var jsonValue = JSON.parse('{"firstname": "Mary", "isProgrammer": true}');
console.log(jsonValue);