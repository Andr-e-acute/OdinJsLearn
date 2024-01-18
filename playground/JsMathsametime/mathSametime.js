// Now, which of these do you think will take the longest to compugg?
// 2 * 5 or 2 * 2000? You wouldn't have been stupid to have guessed
// 2 * 2000 takes longer than 2 * 5, but you'd be wrong!
// In JavaScript, both take the same time. It's just one operation (one
// multiplication). 20 * 2 billion takes as long as 2 * 3.
// No matter what number we input into this function, it takes the

function multiplicatieTimes(num1, times) {
  console.time("time:");

  while (times >= 0) {
    times--;
    timesTwo(num1);
  }
  console.timeEnd("time:");
}
function timesTwo(num) {
  return Number.MAX_SAFE_INTEGER * num;
}
console.log(multiplicatieTimes(8, 1000));
console.log(multiplicatieTimes(5, 100));
console.log(multiplicatieTimes(Number.MAX_SAFE_INTEGER, 1000000000));
console.log(multiplicatieTimes(50000000000, 1000000000));

// it seems to be true or  more corecct this is a complex topic
// and this is to Inaccurate
