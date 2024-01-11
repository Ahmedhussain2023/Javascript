
/*
  1. for loop star exercise
  1. Nested for loop
*/


//! 1. star exercise

//* forward
var star = '';
for (var i = 1; i <= 10; i++) {
star = star + '*';
console.log(star);
}    

//* backward with array
var star = ['*', '*', '*', '*', '*', '*', '*', '*', '*', '*'];
for (var i = 10; i >= 1; i--) {
console.log(star.join(''));
star.pop();
}    

//* backward with string
var star = '**********';
for (var i = 10; i >= 1; i--) {
console.log(star);
star = star.slice(0, -1);
}  

//* split backward
var star = '**********';
var space = '';
for (var i = 10; i >= 1; i--) {
console.log(space + star);
space = space + ' ';
star = star.slice(1);
}  

//* split
var star = '*';
var space = '         ';
for (var i = 1; i <= 10; i++) {
console.log(space + star);
star = star + '*';
space = space.slice(1);
}

// Parimid
function createPyramid(height) {
    for (var i = 1; i <= height; i++) {
      var spaces = ' '.repeat(height - i);
      var stars = '*'.repeat(2 * i - 1);
      console.log(spaces + stars);
    }
  }
createPyramid(10);


var arr = []
 for (var i = 0; i <=3; i++){
    arr.push(i)
    var nested = []
  for (var k = 0; k<=10; k++){
    nested.push(k)
  }
arr.push(nested)
} 
 console.log(arr)