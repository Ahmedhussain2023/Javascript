
//function expression => jo variable mai save hoskta ho
// Arrow fnction code ko short krke likhta hai
//Function decleration ya Arrow function ko ksi bh vairable mai savekra dein to wo function expression bn jata hai
//function k keyword sai jo bhi function bna ho => function decleration
// Arrow function ka syntax chota hai woh direct return krwaa deta hai
// Arrow function mi jo scope hota hai woh block scope hota hai
// This keyword or arguments keyword arrow function mai nae hote qk woh Function scope mai hote hein
// Expression hamesha ek dosre ko return krti hai
//Function decleration function scope ko mila kr hum Function expression bna skte hein


// Diffrences In Arrow VS Declaratio Function
/*
1 . hoisting
2 . shorter syntax
3 . arguments keyword
4 . this keyword
5 . scope of a arrow functiom is not funcion scope
*/

/*
  1. Other Functions
*/

// 1 Function declaration
add_declaration(7,5)
function add_declaration(a,b) {
  return a + b
}


// 2 Function Expression
add(7,5)
const add = function(a,b) {
  return a + b
}

// 3 Arrow function
const substract = (a,b) => {
  return a - b
}
substract(10,2)

 const cy = 2023
 const obj = {
     name: 'ali',
     dob: 2000,
     getAge: function() {
       const calc =  () => {
         return cy - this.dob
       }
        
      return calc()
     }
 }
 obj.getAge()


 // addEventListner ek method hi jisme 3 arguments hot hein
 //Normall funtion ka first letter capital nahi hota lkn constructor mai first letter capital hota hai 



 //obj.getAge()

 /*
 1. How to create constructor with properties and method
 2. Hhow to call constructor
 3. What new keyword does
 4. What is instanse

*/

function MyHuman(dob, name, gender) {
    this.dob = dob;
    this.name = name;
    this.gender = gender;
    this.calcAge=function() 
}
MyHuman.prototype.calcAge = function() {
  return 23 - this.dob
};

const obj = new MyHuman(2000, 'ali', 'male')
const obj2 = new MyHuman(2000, 'ali', 'male')
const obj3 = new MyHuman(2000, 'ali', 'male')
console.log(obj, obj2, obj3)

/*
          _  // Object
    _          _
  _ _ _ _    _ _ _ _

*/