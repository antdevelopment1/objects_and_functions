// The word "this" inside function a points to the window
// The word this.newvariable in this context allows us access to newvariable from the windo enviornment even though it's inside of a function.
function a() {
    console.log(this);
    this.newvariable = 'hello';
}

// The word "this" in this context will point to the window object
var b = function() {
    console.log(this);
}

a();

console.log(newvariable);

b();

// This is cool because in this context this is pointing to the outer enviornment c as an object.
// It is wrapped in a function so its outer enviornment is not the window. It's actually the c object itself. So cool.
// We also add this.name which allows us toverwrite the orginal value of the key name and we log it to the console to see its value
var c = {
    name: "The c object",
    log: function() {
        console.log(this);
        this.name = "Updated c object";
        console.log(this);
    }
}
c.log();