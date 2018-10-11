// Utilizes function expressions and closures in the code below
function sayHiLater() {

    var greeting = "Hi";
    
    setTimeout(function() {

        console.log(greeting);

    }, 3000)


}

sayHiLater();

// jQuery uses function expressions and first class functions!
// $("button").click(function() {

// });

function tellmeWhenDone(callback) {

    var a = 1000;

    var b = 2000;

    callback();
}

tellmeWhenDone(function() {

    console.log('Tell me when done!');

});

tellmeWhenDone(function() {

    alert('Tell me when done!');
    
});