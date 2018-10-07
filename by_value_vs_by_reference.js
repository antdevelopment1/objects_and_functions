// by value (primitives)
var a = 3;
var b;

b = a;
a = 2;
console.log(a);
console.log(b);

// By reference (all objects (including functions))
var c = {greeting: 'hi'};
var d;

d = c;
console.log(d);
c.greeting = 'hello';
console.log(c);
console.log(d);

// Values that are non primitive data types will be passed by reference so anything you do to one thing pointing
// to the same space in memory dealing with functions, arrays, or obejcts will all be changed and updated.

// by reference (even as parameters)
function changeGreeting(obj) {
    obj.greeting = 'Hola';
}
changeGreeting(d);
console.log(c);
console.log(d);

// Anywehre you change a value by reference anything associated with that address will also be changed.

// However in the example below
c = {greeting: 'howdy'};
console.log(c);
console.log(d);
// c and d are no longer pointing to the same space in memory. This is an exception.
