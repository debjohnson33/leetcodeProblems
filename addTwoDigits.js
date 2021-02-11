/*
You are given a two-digit integer n. Return the sum of its digits.

Example

For n = 29, the output should be
addTwoDigits(n) = 11.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

A positive two-digit integer.

Guaranteed constraints:
10 ≤ n ≤ 99.

[output] integer

The sum of the first and second digits of the input number. */

function addTwoDigits(n) {
  let digits = n.toString();
  let total = 0;

  for (char of digits) {
    total += parseInt(char, 10);
  }
  return total;
}

function test() {
  const example1 = addTwoDigits(29);
  console.log(example1);
  const example2 = addTwoDigits(33);
  console.log(example2);
  const example3 = addTwoDigits(99);
  console.log(example3);
}

test();