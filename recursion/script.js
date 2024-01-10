// Sum all numbers till the given one
// importance: 5
// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.
// Make 3 solution variants:

//1 Using a for loop.
// 2 Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// 3 Using the arithmetic progression formula.

// 1 Using a for loop

function sumToForLoop(num) {
  let result = 0;
  for (; num >= 1; --num) {
    result += num;
  }
  return result;
}

console.time("timer");
console.log(sumToForLoop(1000));
console.timeEnd("timer");

// 2 Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
function sumToRecursion(num) {
  return num <= 1 ? 1 : num + sumToRecursion(num - 1);
  //   if (num <= 1) {
  //     return 1;
  //   } else {
  //     return num + sumToRecursion(num - 1);
  //   }
}

console.time("timer");
// console.log(sumToRecursion(9650));
console.log(sumToRecursion(1000));
console.timeEnd("timer");

// 3 Using the arithmetic progression formula.
function sumTo(n) {
  return (n * (n + 1)) / 2;
}
console.time("timer");
console.log(sumTo(1000));
console.timeEnd("timer");

// Calculate factorial

// The factorial of a natural number is a number multiplied by "number minus one",
//  then by "number minus two", and so on till 1. The factorial of n is denoted as n!
function fac(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * fac(n - 1);
  }
}
console.log(fac(5));

// Fibonacci numbers
function fibonacci(n) {
  console.log("n is:" + n);
  if (n <= 1) {
    console.log("baseCase");
    return n;
  } else {
    console.log(`other case: fibonacci(${n} - 1) + fibonacci(${n} - 2)`);
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
// slow as fuck and chrashes fast
console.log(fibonacci(10));

// loops are better solution here:
function fib(n) {
  let a = 1;
  let b = 1;
  // The loop starts with i=3, because the first and the second sequence values
  //  are hard-coded into variables a=1, b=1.
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(3));
console.log(fib(10));
console.log(fib(77)); // 5527939700884757

// Output a single-linked list
// importance: 5
// Let’s say we have a single-linked list
// loop solutiuon
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printListLoop(list) {
  let tmp = list;

  while (tmp) {
    console.log(tmp.value);
    tmp = tmp.next;
  }
}

printListLoop(list);
console.log("--------------------------------------");
function printList(list) {
  // use this log for normal order
  console.log(list.value); // output the current item

  if (list.next) {
    console.log("list next:");
    printList(list.next); // do the same for the rest of the list
  }
  //   use this log for reversed
  console.log(list.value); // output the current item
}

printList(list);
