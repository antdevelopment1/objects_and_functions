function mapForEach(arr, fn) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {

        newArr.push(fn(arr[i]));
    
    };
    return newArr;

}

var arr1 = [1, 2, 3];
console.log(arr1);
var newArr = arr1.map(function(array1) {
    return array1 * 2;
})
// _.map(arr1, function (blue) {
//   return blue * 2;
// })
console.log(newArr);

var arr2 = mapForEach(arr1, function(item) {
    return item * 2;
});
 

console.log(arr2);

// Map function that loops through each element

var mapThis = function(array, func) {
    newList = [];
    for (var i = 0; i < array.length; i++) {
        newList.push(func(array[i]));
    }
    return newList;
}


// Create list of items
var list = [1, 2, 3];


// Call the function that will take the function that i want to change my list as an argument
modifiedArray = mapThis(list, function(val) {
    return val * 10;
})

console.log(modifiedArray);