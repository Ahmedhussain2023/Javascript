/*
  Functions practice
  variable
  1. var
  2. var
     - create new variable
     - access variable from anywhere
     - reassign variable from anywhere
     - 
  3. let
  4. const
*/

1. // create a function that takes first name, last name and return capitilize full name
2. // create a function that takes a number with length and rturn table of that number


function multiplicationTable(number, length){
    for (let i = 1; i <=length; i++){
        console.log(`${number} x ${i} = ${number*i}`);
    }
  }
  multiplicationTable(2, 10)