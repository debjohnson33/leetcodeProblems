/**
 * @param {number} x
 * @return {boolean}
*/

/*
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Example 1:

Input: x = 121
Output: true
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:

Input: x = -101
Output: false

Constraints:

-231 <= x <= 231 - 1

Follow up: Could you solve it without converting the integer to a string?

*/

// Input: integer
// Output: boolean
// Contraints: -231 <= x <= 231 - 1
// Edge cases: ??
// Examples: see above

var isPalindrome = function(x) {
  if (x < 0) return false;
  if (x === 0) return true

  let numString = x.toString();
  let reversedNumString = x.toString().split('').reverse().join('');

  return numString === reversedNumString;
};

const test = () => {
  const example1 = isPalindrome(121);
  console.log(example1);
  const example2 = isPalindrome(-121);
  console.log(example2);
  const example3 = isPalindrome(10);
  console.log(example3);
  const example4 = isPalindrome(-101);
  console.log(example4);
};

test();