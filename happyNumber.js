/*
A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
Example 2:

Input: n = 2
Output: false


Constraints:

1 <= n <= 231 - 1
*/

const isHappy = function(n) {
  const seen = {};

  seen[n] = true;
  while (true) {
    n = n.toString()
        .split('')
        .map(num => parseInt(num, 10))
        .reduce((total, digit) => {return total + digit * digit}, 0);

    if (n === 1) {
      return true;
    } else if (seen[n]) {
      return false;
    } else {
      seen[n] = true;
    }
  }
};

const test = () => {
  const example1 = isHappy(19); // true
  console.log(example1);
  const example2 = isHappy(2); // true
  console.log(example2);
  const example3 = isHappy(10); // true
  console.log(example3);
};

test();