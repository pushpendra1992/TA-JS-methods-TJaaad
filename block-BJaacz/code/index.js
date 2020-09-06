// Test using EXAMPLE functions given below each function.

/*
  Create a function named addTwo which accepts a number, adds 2 to the number and return the new value.
*/
let x = 24;
let addTwo = (x) => x + 2;
document.write(addTwo(x));
document.write("<br>")

/*
  Create a function named addThree which accepts a number, adds 3 to the number and return the new value.
*/

let addThree = (x) => x + 3;
document.write(addThree(x));
document.write("<br>");
/*
  Create a function named addFive which accepts a number, adds 5 to the number and return the new value.
*/
let addFive = x => x + 5;
document.write(addFive(x));
document.write("<br>");
/*
  Create a function named addTwoToArray which accepts:
    - An array of numbers
    - Returns a new array where 2 is added to each element
    - While doing so use the funciton addTwo
*/

let arr = [2, 4, 6, 8, 10, 12, 14, 16];

function addTwoToArray(arr) {
  let array = [];
  for (x of arr) {
    array.push(addTwo(x));
  }
  return array;
}
document.write(addTwoToArray(arr));
document.write("<br>")
/*
  Create a function named addThreeToArray which accepts:
    - an array of numbers
    - aeturns a new array where 2 is added to each element
    - while doing so use the funciton addThree
*/

function addThreeToArray(arr) {
  let array = [];
  for (x of arr) {
    array.push(addThree(x));
  }
  return array;
}
document.write(addThreeToArray(arr));
document.write("<br>");
/*
  Create a function named addFiveToArray which accepts:
    - an array of numbers
    - aeturns a new array where 2 is added to each element
    - while doing so use the funciton addThree
*/
function addFiveToArray(arr) {
  let array = [];
  for (x of arr) {
    array.push(addFive(x));
  }
  return array;
}
document.write(addFiveToArray(arr));
document.write("<br>");
/*
In above function addTwoToArray, addThreeToArray, addFiveToArray we are repeating the code, let's fix this.

  Create a function named changeArray which accepts two arguments:
    - an array of numbers
    - a callback function
    - pass each element of array to the callback function
    - and store the value returned from callback function in a new array
    - return the new array

  EXAMPLE:
    changeArray([1, 2, 3, 4, 5, 6], addTwo); // [3, 4, 5, 6, 7, 8]
    changeArray([1, 2, 3, 4, 5, 6], addThree); // [4, 5, 6, 7, 8, 9]
    changeArray([1, 2, 3, 4, 5, 6], addFive); // [6, 7, 8, 9, 10, 11]
*/
function changeArray(arr, fn) {
  let array = [];
  for (x of arr) {
    array.push(fn(x));
  }
  document.write("<br>")
  return array;
}
document.write(changeArray(arr, addTwo));
document.write(changeArray(arr, addThree));
document.write(changeArray(arr, addFive));


/*
  Create a function called sendMessage that accepts two arguments:
    - a string (message) and a function (callback).
    - it will return the result of the callback function called with the message as argument

  EXAMPLE:
    sendMessage("Hello", console.log);
    sendMessage("Hello Alert!", alert);
    sendMessage("Hello Prompt!", prompt);
*/
let str = "hello";

function sendMessage(str, fn) {
  fn(str);
}
sendMessage(str, console.log);
sendMessage(str, alert);
sendMessage(str, prompt);
/*

 Create a function named `first` that accepts an argument a function (callback) and return the same function defination.

*/
function first(fn) {
  return fn;
}
document.write("<br>")
document.write(addTwo);
/*
 Create a function named `second`
  - Inside second create another function named `third` which accepts a number, adds 1 to it and returns it
  - Return the function defination (third) from the second function
  - Also write the required code to call the function
*/

function second() {
  function third() {
    let x = prompt("Enter number to add one");
    x += 1;
    return x;
  }
  document.write("<br>")
  return third;
}
document.write(second());
/*
 Write a function named `callMe` which 
  - accept a function (callback function) as argument.
  - Store the value returned by calling the callback function in a variable named `final`
  - return final varibale from the function.
  - also write the required code to call the function.
*/

function callMe(fn) {
  let final = fn(x);
  return final;
}
callMe(fn);

// Data Starts (Don't change this)
const people = [{
    name: 'John Doe',
    age: 16
  },
  {
    name: 'Thomas Calls',
    age: 19
  },
  {
    name: 'Liam Smith',
    age: 20
  },
  {
    name: 'Jessy Pinkman',
    age: 18
  },
];

const grades = [{
    name: 'John',
    grade: 8,
    sex: 'M'
  },
  {
    name: 'Sarah',
    grade: 12,
    sex: 'F'
  },
  {
    name: 'Bob',
    grade: 16,
    sex: 'M'
  },
  {
    name: 'Johnny',
    grade: 2,
    sex: 'M'
  },
  {
    name: 'Ethan',
    grade: 4,
    sex: 'M'
  },
  {
    name: 'Paula',
    grade: 18,
    sex: 'F'
  },
  {
    name: 'Donald',
    grade: 5,
    sex: 'M'
  },
  {
    name: 'Jennifer',
    grade: 13,
    sex: 'F'
  },
  {
    name: 'Courtney',
    grade: 15,
    sex: 'F'
  },
  {
    name: 'Jane',
    grade: 9,
    sex: 'F'
  },
];
// Data Ends

/*
  Create a function named isAdult which accepts:
    - an object
    - returns true or false based on the `age` property in the object is greater than 18 or not

  EXAMPLE:
    isAdult(people[0]); // false
    isAdult(people[1]); // true
    isAdult(people[2]); // true
*/
function isAdult(obj) {
  if (obj.age > 18) {
    return true;
  } else {
    return false;
  }
}
isAdult(people[0]);
/*
  Create a function named isMale which accepts:
    - an object
    - returns true or false based on the `sex` property in the object is `M` or not

  EXAMPLE:
    isMale(grade[0]); // true
    isMale(grade[1]); // false
    isMale(grade[2]); // true
*/

function isMale(obj) {
  if (obj.sex == "M") {
    return true;
  } else {
    return false;
  }
}
isMale(grades[0]);
/*
  Create a function named isFemale which accepts:
    - an object
    - returns true or false based on the `sex` property in the object is `F` or not

  EXAMPLE:
    isMale(grade[0]); // false
    isMale(grade[1]); // true
    isMale(grade[2]); // false
*/
function isFemale(obj) {
  if (obj.sex == "F") {
    return true;
  } else {
    return false;
  }
}
isFemale(grades[0]);
/*
  Create a function named isGradeA which accepts:
    - an object
    - returns true or false based on the `grade` property in the object is greater than 12 or not

  EXAMPLE:
    isGradeA(grade[0]); // false
    isGradeA(grade[1]); // false
    isGradeA(grade[2]); // true
*/
function isGradeA(obj) {
  if (obj.grade > 12) {
    return true;
  } else {
    return false;
  }
}
isGradeA(grades[0]);
/*
  Create a function named isGradeB which accepts:
    - an object
    - returns true or false based on the `grade` property in the object is greater than 8 and less than or equal to 12 or not
  
  EXAMPLE:
    isGradeB(grade[0]); // true
    isGradeB(grade[1]); // true
    isGradeB(grade[2]); // false
*/
function isGradeB(obj) {
  if (obj.grade > 8 && obj.grade <= 12) {
    return true;
  } else {
    return false;
  }
}
isGradeB(grades[0]);
/*
  Create a function named isGradeC which accepts:
    - an object
    - returns true or false based on the `grade` property in the object is less than or equal to 8  or not

  EXAMPLE:
    isGradeC(grade[0]); // true
    isGradeC(grade[1]); // false
    isGradeC(grade[2]); // false
*/
function isGradeC(obj) {
  if (obj.grade <= 8) {
    return true;
  } else {
    return false;
  }
}
isGradeC(grades[0]);
/*
  Create a function named filterAdult which accepts:
    - an array of objects
    - returns a new array with the value of age greater than 18 or not
    - while doing so use the funciton isAdult you created earlier
  
  EXAMPLE:
    filterAdult(people);

  Output: 
    [
      { name: 'Thomas Calls', age: 19 },
      { name: 'Liam Smith', age: 20 },
    ];
*/
function filterAdult(people) {
  let array = [];
  for (obj of people) {
    let y = isAdult(obj);
    if (y) {
      array.push(obj);
    }
  }
  return array;
}
filterAdult(people);
/*
  Create a function named filterMale which accepts:
    - an array of objects
    - returns a new array with the value of sex is `M` or not
    - while doing so use the funciton isMale you created earlier

  EXAMPLE:
    filterMale(grade);

  Output: 
    [
      { name: 'John', grade: 8, sex: 'M' },
      { name: 'Bob', grade: 16, sex: 'M' },
      { name: 'Johnny', grade: 2, sex: 'M' },
      { name: 'Ethan', grade: 4, sex: 'M' },
      { name: 'Donald', grade: 5, sex: 'M' },
    ];
*/
function filterMale(grades) {
  let array = [];
  for (obj of grades) {
    let y = isMale(obj);
    if (y) {
      array.push(obj);
    }
  }
  return array;
}
filterMale(grades);
/*
  Create a function named filterFemale which accepts:
    - an array of objects
    - returns a new array with the value of sex is `F` or not
    - while doing so use the funciton isFemale you created earlier

  EXAMPLE:
    filterFemale(grade);

  Output: 
    [
      { name: 'Sarah', grade: 12, sex: 'F' },
      { name: 'Paula', grade: 18, sex: 'F' },
      { name: 'Jennifer', grade: 13, sex: 'F' },
      { name: 'Courtney', grade: 15, sex: 'F' },
      { name: 'Jane', grade: 9, sex: 'F' },
    ]
*/
function filterFemale(grades) {
  let array = [];
  for (obj of grades) {
    let y = isFemale(obj);
    if (y) {
      array.push(obj);
    }
  }
  return array;
}
filterFemale(grades);
/*
  Create a function named filterGradeA which accepts:
    - an array of objects
    - returns a new array with the value of grade is greater than 12 or not
    - while doing so use the funciton isGradeA you created earlier

  
  EXAMPLE:
    filterGradeA(grade);

  Output: 
    [
      { name: 'Sarah', grade: 12, sex: 'F' },
      { name: 'Paula', grade: 18, sex: 'F' },
      { name: 'Jennifer', grade: 13, sex: 'F' },
      { name: 'Courtney', grade: 15, sex: 'F' },
      { name: 'Jane', grade: 9, sex: 'F' },
    ]
*/
function filterGradeA(grades) {
  let array = [];
  for (obj of grades) {
    let y = isGradeA(obj);
    if (y) {
      array.push(obj);
    }
  }
  return array;
}
filterGradeA(grades);
/*
  Create a function named filterGradeB which accepts:
    - an array of objects
    - returns a new array with the value of grade is greater than 8 and less than or equal to 12 or not
    - while doing so use the funciton isGradeB you created earlier

  EXAMPLE:
    filterGradeB(grade);

  Output: 
    [
     { name: 'Sarah', grade: 12, sex: 'F' },
     { name: 'Johnny', grade: 2, sex: 'M' },
     { name: 'Ethan', grade: 4, sex: 'M' },
     { name: 'Donald', grade: 5, sex: 'M' },
     { name: 'Jane', grade: 9, sex: 'F' },
    ]
*/
function filterGradeB(grades) {
  let array = [];
  for (obj of grades) {
    let y = isGradeB(obj);
    if (y) {
      array.push(obj);
    }
  }
  return array;
}
filterGradeB(grades);
/*
  Create a function named filterGradeC which accepts:
    - an array of objects
    - returns a new array with the value of grade is greater less or equal to 8 or not
    - while doing so use the funciton isGradeC you created earlier

  EXAMPLE:
    filterGradeC(grade);

  Output: 
     [
      { name: 'John', grade: 8, sex: 'M' },
      { name: 'Johnny', grade: 2, sex: 'M' },
      { name: 'Ethan', grade: 4, sex: 'M' },
      { name: 'Donald', grade: 5, sex: 'M' },
    ]
*/
function filterGradeC(grades) {
  let array = [];
  for (obj of grades) {
    let y = isGradeC(obj);
    if (y) {
      array.push(obj);
    }
  }
  return array;
}
filterGradeC(grades);
/*
We are repeating lots of code in above functions like filterGradeC, filterGradeB, filterGradeA, filterAdult. We will fix
this by making a higher order function named filter. Now using one function filter we will be able to filter anything we want.
filter is a higher order function.

  Create a function named filter which accepts:
    - an array of objects
    - a callback function (which should return true or false)
    - call the callback function with each object of array
    - if callback function returns true add to new array otherwise don't
    - returns a new array

  EXAMPLE:
    filter(people, isAdult);
    filter(grade, isMale);
    filter(grade, isFemale);
    filter(grade, isGradeA);
    filter(grade, isGradeB);
    filter(grade, isGradeC);
*/
function filter(a, fn) {
  let array = [];
  for (obj of a) {
    let y = fn(obj);
    if (y) {
      array.push(obj);
    }
  }
  return array;
}
filter(grades, isMale);
/*
  Create a function named multiplyBy which accepts:
    - a number (num)
    - and returns a function
    - returned function accepts another number (num2) and return num * num2

  EXAMPLE:
    let multiplyByFive = multiplyBy(5);
    multiplyByFive(10); // 50
    multiplyByFive(20); // 100
    multiplyByFive(5); // 25

    
    let multiplyByNine = multiplyBy(9);
    multiplyByFive(10); // 90
    multiplyByFive(20); // 180
    multiplyByFive(5); // 45
*/
function mul(num2) {
  return num * num2
}

function multiplyBy(num) {
  return mul(num2);
}
multiplyBy(num);