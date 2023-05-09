// index.js - Lab 8 
// Author: Blake Dringenberg
// Date: May 8th, 2023


//function 
function isEven(x){
  return (x % 2 == 0);
}

//function test
console.log("Is 67 even?", isEven(67))
console.log("Is 88 even?", isEven(88))


array = [123, 555, 40, 67, 2]
console.log("My array", array)

var result = array.map(isEven)

//returns correct outputs hopefully
console.log("Test of evenness of array", result);
var result = array.map(function(x){
  return x ** 0.5;
})

// multiply array by two
array.map(function multiply(x) {
  return x * 2;
})

console.log("Multiply array by 2", result);
var result = array.map(function(x){
  return x ** 2.0;
})


