/*
1.Array
2.Data types that support arays(all)
3.How to get individual indexes from array.
4.How to mutate array.
5.How to push index in array(last)
6.How to unshift index in array(start)
7.how to pop(remove) index in array (start)
8.how to shift(remove) index in array
9.How to mutate(change) index in array
10.How to mutate(change) multiple indexes  index in array
11.How to copy multiple indexes from array

*/


var stringName = 'haris';
stringName = 'faris';
console.log(stringName);

var arrayNAme = ['h', 'a', 'r', 'i', 's'];
arrayNAme[0]; 'f'

//to add index in end
arrayNAme.push('ali');

//to add index in start
arrayNAme.unshift('Muhammad');

// to remove index from end
//arrayNAme.pop();

// to remove index from start
//arrayNAme.shift(); start

//to change multiple indexes
//arrayNAme.splice(2,1,'f')
console.log(arrayNAme);

 var newArray = arrayNAme.slice(1,4);
console.log(newArray);
