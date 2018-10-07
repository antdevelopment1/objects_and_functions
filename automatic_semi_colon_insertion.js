// Semi colons in javascript are optional
// The javascript engine puts semi colon where they think they should be. This is automatic semi colon insertion
function getPerson() {
    return
    {
        name: 'Tony'
    }
}
console.log(getPerson());

// The systax parser chose to put a semi colon after return and quits out of the function and results in an undefined result
// To fix this we have to put the object literal on the same line as the return
function Person() {
    return {
        name: 'Tony'
    }
}
console.log(Person());

// ALWAYS PUT SEMI COLONS!!!!!!!!So JAVASCRIPT DOESNT DO IT FOR YOU