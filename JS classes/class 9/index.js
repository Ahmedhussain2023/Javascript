/*
 For Loop
  step 1: Vairiable initialization
  step 2: If condition true (then run block of code)
          else do not run step 3 and break loop
  step 3: Run block of code
  step 4: Update variable


Question
  1: if condition true then run loop
  1: if condition false then break loop
  3: pre and post increment both will run

  */

  /* !increment
  for (var one = 1; one <= 5; ++one){
    console.log(one);
    if (one ===3) {
        break;
    }
  }
  
  // !decrement
  for (var i = 5; i >= 1; i--){
    console.log(i);
  }
  */


  
  // !break
  for (var one = 1; one <= 5; ++one){
    console.log(one);
    if (one ===3) {
        break;
    }
  }

 // !continue
 for (var one = 1; one <= 5; ++one){
    if (one ===3) {
        continue;
    }
    console.log(one);

  }

 // !Loop on Array

 var arr = ['a', 'b', 'c'];
 console.log(arr.length); 3
 console.log(arr[0]);
 console.log(arr[1]);
 console.log(arr[2]);

 for (var i = 0; i > arr.length; i++){
    console.log(arr[i]);
    if (i = 2)
     console.log(i);
 }

  
