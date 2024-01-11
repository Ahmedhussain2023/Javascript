/*
1. Switch
*/


//Switch Method
function isOddorEven(num) {
    switch (num % 2 ) {
    case 0:
        document.write("Even");
    break;
    case 1:
        document.write("Odd");
    default:
        document.write("Invalid number");
 }
}

isOddorEven(6);


function isOddorEven(num) {
    if (num % 2 === 0) return"Even";
    else return"Odd";

}


// number of occurrence give letter

// little

const word = 'little';

const lettersArr = [];
const occurrenceArr = [];

for (let i = 0; i < word.length; i++) {
  const letter = word[i];
  if (lettersArr.includes(letter) === false) {
    lettersArr.push(letter);
  }
  const index = lettersArr.indexOf(letter);
  occurrenceArr[index] ??= 0;
  occurrenceArr[index] += 1;
}

console.log(lettersArr);
console.log(occurrenceArr);