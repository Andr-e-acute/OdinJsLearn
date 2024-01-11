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

function all(arr, cb) {
  let arrCopy = [...arr];
  if (arrCopy.length == 0) {
    return true;
  } else if (cb(arrCopy.pop())) {
    return all(arrCopy, cb);
  } else {
    return false;
  }
}
var allAreLessThanSeven = all([2, 2, 6], function (num) {
  return num < 7;
});
// console.log(allAreLessThanSeven);

//------------------------------------------------------

// Question 5: Product of an array
// Write a function called productOfArray which takes in an array of numbers
// and returns the product of them all

// Sample:

// var six = productOfArray([1,2,3]) // 6
// var sixty = productOfArray([1,2,3,10]) // 60
function productOfArray(arr) {
  let arrCopy = [...arr];
  console.log(arrCopy);
  if (arrCopy.length == 1) {
    return arrCopy[0];
  } else {
    // arrCopy[0] *= arrCopy.pop();
    // return productOfArray(arrCopy);
    return arrCopy.pop() * productOfArray(arrCopy);
  }
}
// console.time("arr");
// productOfArray([1, 2, 3]);
// productOfArray([1, 2, 3, 10]); // 60
// console.timeEnd("arr");
//------------------------------------------------------
// version of the previous question that change the array
function productOfArray2(arr) {
  arr.length == 1 ? arr[0] : arr.pop() * productOfArray2(arr);
}
// console.time("arr2");
// productOfArray2([1, 2, 3]);
// productOfArray2([1, 2, 3, 10]); // 60
// console.timeEnd("arr2");
// much faster don't need to copy the array everytime?

//------------------------------------------------------
// Question 6: Search JS object
// Write a function called contains that searches for a value in a nested object.
//  It returns true if the object contains that value.
var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo2",
          },
        },
      },
    },
  },
};

function contains(obj, value) {
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      return contains(obj[key], value);
    } else if (obj[key] === value) {
      return true;
    } else {
      return false;
    }
  }
}
// console.log(contains(nestedObject, "foo"));
// let doesntHaveIt = contains(nestedObject, "foo"); // false

//------------------------------------------------------

// Question 7: Parse a multi-dimensional array
// Given a multi-dimensional integer array,
//  return the total number of integers stored inside this array

// Sample:

// console.log(totalIntegers([[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]]));

function totalIntegers(array) {
  console.log(array);
  if (array.length === 0) return 0;

  let total = 0;
  let last = array.pop();

  if (Array.isArray(last)) {
    total += totalIntegers(last);
  } else if (Number.isInteger(last)) {
    total += 1;
  }
  console.log("total:" + total);
  return total + totalIntegers(array);
}

//------------------------------------------------------

// Question 8:
// Write a function that sums squares of numbers in list that may contain more lists

function SumSquares(arr) {
  if (arr.length === 0) return 0;
  let result = 0;

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result += SumSquares(element);
    } else {
      result += element * element;
    }
  });

  return result;
}
// Sample:

// var l = [1, 2, 3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[1, 2], 3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[[[[[[[[1]]]]]]]]];
// console.log(SumSquares(l)); // 1 = 1

// l = [10, [[10], 10], [10]];
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

//------------------------------------------------------

// Question 9:
// The function should return an array containing repetitions of the number argument.
// For instance, replicate(3, 5) should return [5,5,5].
// If the times argument is negative, return an empty array.

// Sample:
function replicate(count, number) {
  if (count <= 0) {
    return [];
  } else {
    return [number].concat(replicate(count - 1, number));
  }
}
console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []
