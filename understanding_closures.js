function greet(whattosay) {
    return function(name) {
       console.log(whattosay + " " + name); 
    }
}


var sayHi = greet('Hi');
sayHi('Tony')

// or

greet('Hi')('Tony');

// This is cool because even though the greet function has been called we still have
// Access to the the returned value. Its still there in the execution context

function buildFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        )
    }
    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

// Still has access to the outer enviornment memory of buildFunctions
// Console.log runs after its pushed to an the array. By the time we call al these function i is 3

function buildFunctions2() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function(j) {
                return function() {
                    console.log(j);
                }
            }(i))
        )
    }
    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();