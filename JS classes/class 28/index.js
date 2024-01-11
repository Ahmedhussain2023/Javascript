//premitive==== jb bhi aap ksi ko koi value dete ho toh woh copy hokar jati hai....sb k ps alg value hoti hai
                //isme value by refffrence nhi jati 

              

let a = 10
let b = a
a = 20
console.log('b: ',b)
console.log('a: ',a)


//non premitive === isme by refrence value ati hai copy hokr nhi jati 
                    

// Ex: Array


function listner() {
    console.log(1)
}


//object

const object = {
    name: 'Ahmed',
    age: '19',
    rollNumber: 'WMA-139122',
}
console.log(object)


// Count the occurrence 
const string = 'abjdkjdkjckjlxjkxnscjlkj,ncuihfyrfjbsklknkajkjdhcknlkklkklkk lksMAKXSLKljlxsnjknksCjkckjCNJKncknknlckncn ';

const count = {};

for (const element of string) {
  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}

console.log(count);
