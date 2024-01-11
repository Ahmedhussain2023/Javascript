
//const arr = [2,5,7,8,9,25,18,20,26];
//const words = arr.filter((words) => words % 2);
//console.log(words);



//const arr = [2,4,6,8,12,14,45,54,65];
//arr.some((element, index , arr) => {
//    if(element > 40) return true
//})


/*
   Array ramining methods
   1. filter
   2. find
   3. findLast
   4. findIndex
   5. findLastIndex
   6. some
   7. every
   8. concat
   9. sort
   10. reverse
   11. at
   12. flat
   13. flatMap
*/


// ! filter

 const arr  = [4,2,55,8,9,45,2,2,35,5]
 arr.filter((element, index, arr) => {
   if(element == 8) return false
    else return true
 })

 const arrr = [4, 'car', 2, 55, 8, 9, ['c', 'b'], 45, 2, 2, { name: 'ali' }, 35, 5]
 arr.find((element, index, arrr) => {
    if (element == 8) return true })


// ! find

 const arra = [4, 'car', 2, 55,false, 8, 9, ['c', 'b'], 45, 2, 2, { name: 'ali' }, 35,true, 5]
  arr.find((element, index, arra) => {
        if (typeof element === 'object' && element.__proto__ === Object.prototype ) return true
 })

 const aerr = [4, 'car', 2, 55,false, 8, 9, ['c', 'b'], 45, 2, 2, { name: 'ali' }, 35,true, 5]

 arr.find((element, index, arr) => {
    if (typeof element === 'object' && !Array.isArray(element) ) return true
 })


// ! findIndex

 const arrrr  = [4,2,55,8,9,45,2,2,35,5]
 arr.findIndex((element, index, arr) => {
     if(element > 10) return true
 })


// ! flat

 const arri  = [4,2,55,['m',[1],100],'f',7,'v','a',8,9,45,2,2,35,5]
 arr.every((element, index, arr) => {
    if(2 > element) return true
 })

// arr.flat(2)