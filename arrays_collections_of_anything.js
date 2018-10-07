// Javascript arrays are different because its dynamically typed
// ?This means i cant put different types into an Array.
// The function inside this array if an expression

var arr = [
    1,
    false,
    {
        name: "Tony",
        address: "111 Main St."
    },
    function(name) {
        var greeting = "Hello ";
        console.log(greeting + name);
    },
    "hello"
];
console.log(arr);
arr[3](arr[2].name);
// Wow this is awesome!!! So we use the function inside of the list to access and greet the person inside of the object. Mind blown.