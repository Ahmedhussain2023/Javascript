
// **value initialize krana or execute krwana alag chez hein**
// **block k bahir jitna bhi code likha hota hai uer wh sb global scope kehlata hai**

/*
 1. global scop (jo bhi code block k bhr likha hoga woh global scop hota hai )
 2. function scop (function k block mai jo bhi likha hoga woh function scop hai)
 3.block scop (block scop jese {} mai jo ho)



**Code Run Process**
1.go through () isme code execute nahi hota bs go through mai yeh values dekhta hai )
2.execute hoskta hai

1.reassign
2.redeclare   ( koi bhi cheez re eclare kbhi hoti hi nahi hai reasssign)
*/

/*

Var
1.reassign
2.can be acces before initialize
3.not a block scope
4.it is function scope


Let
1.reassign
2.TDZ (temporal dead zone)
3.can not be acces before initialize
4.can be access before initialize
5. it is a block scope
6.it is function scope


Const
1.can not be reassign
2.value must be given (no empt initialize)
2.TDZ (temporal dead zone)
3.can not be acces before initialize
4.can be access before initialize
5. it is a block scope
6.it is function scope


Funtion
1. not a block scope
2. it is a function scope
*/

// value initialize krana or execute krwana alag chez hein 

var teacher = "a";

if(true){
    console.log(teacher);

    let teacher = "c";
    function askTeacherName() {
        console.log(teacher)
    }
}

console.log(teacher);  //yahan console pr teacher ki value c aygi qk line # 23 pr var nai teacher ki value reassign krdi 
//line 23 pr var likha ho ya na likha farq nae prta

