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


        var setname = function(newname) {
            this.name = newname;
        }
        setname('Updated again the c object');
        console.log(this);
    }
}
c.log();
// In the example about for some reason the this keyword inside the setname function points to the global window...which to me is kind of crazy
// Even though its inside an object thats inside of a function somehow setname still points to the global window
// To remedy this
var x = {
    name: 'The d object',
    log: function() {
        console.log(this);
        var self = this;

        self.name = 'Updated d object';
        console.log(self);
        var setname = function(newname) {
            self.name = newname;
        }
        setname('Updated again! The d objects');
        console.log(self);
    }
}
x.log();
// This is cool because in the example above we save the environment at the level associated with the log function inside of a variable called self
// This allows us to rememdy the issue in which this refers to the window environment and allows us to safe and continue to reference the function enviornment
// Mind blown so cooool.