// Question 1: Sum all numbers
// Write a function called sumRange.
// It will take a number and return the sum of all numbers from 1 up to the number passed in.

// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.
function sumRange(num) {
  //   if (num <= 0) {
  //     return 0;
  //   } else {
  //     return num + sumRange(num - 1);
  //   }

  return num <= 0 ? 0 : num + sumRange(num - 1);
}
//------------------------------------------------------

// Question 2: Power function
// Write a function called power which takes in a base and an exponent.
//  If the exponent is 0, return 1.

// Sample:

// console.log(power(2, 4)); // 16

function power(base, exp) {
  return exp == 0 ? 1 : base * power(base, exp - 1);

  //   console.log(num);
  //   console.log(exponent);
  //   console.log("-------------");
  //   if (exponent == 0) {
  //     return 1;
  //   }
  //   return num * power(num, exponent - 1);
}

//------------------------------------------------------

// Question 3: Calculate factorial
// Write a function that returns the factorial of a number.
// As a quick refresher,
//  a factorial of a number is the result of that number multiplied by the number before it,
//   and the number before that number, and so on, until you reach 1.
//   The factorial of 1 is just 1.

// Sample:

// factorial(5); // 5 * 4 * 3 * 2 * 1 === 120

function factorial(num) {
  //   if (num == 1) {
  //     return 1;
  //   }
  //   return num * factorial(num - 1);
  return num == 1 ? 1 : num * factorial(num - 1);
}

//------------------------------------------------------

// Question 4: Check all values in an array
// Write a function called all which accepts an array and a callback
// and returns true if every value in the array returns true
//  when passed as parameter to the callback function

// Sample:

var allAreLessThanSeven = all([1, 2, 9], function (num) {
  return num < 7;
});

console.log(allAreLessThanSeven); // false

function all(arr, cb) {
  //   copy arr
  let arrCopy = [...arr];
  console.log(arrCopy.length);
}
