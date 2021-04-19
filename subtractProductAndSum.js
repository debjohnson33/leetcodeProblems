/*
Given an integer number n, return the difference between the product of its digits and the sum of its digits.

Example 1:

Input: n = 234
Output: 15
Explanation:
Product of digits = 2 * 3 * 4 = 24
Sum of digits = 2 + 3 + 4 = 9
Result = 24 - 9 = 15
Example 2:

Input: n = 4421
Output: 21
Explanation:
Product of digits = 4 * 4 * 2 * 1 = 32
Sum of digits = 4 + 4 + 2 + 1 = 11
Result = 32 - 11 = 21

Constraints:

1 <= n <= 10^5

*/

const subtractProductAndSum = (n) => {
  let nArr = n.toString().split('').map((s) => {
    return parseInt(s, 10);
  });
  // let nArr = [];
  // while (n > 0) {
  //   let s = n % 10; // 2nd method using modulo
  //   nArr.push(s);
  //   n = Math.trunc(n / 10);
  // }

  let product = nArr.reduce((acc, val) => acc * val);
  let sum = nArr.reduce((acc, val) => acc + val);

  return product - sum;
};

const test = () => {
  const example1 = subtractProductAndSum(234);
  console.log(example1);
  const example2 = subtractProductAndSum(4421);
  console.log(example2);
  const example3 = subtractProductAndSum(126789); // 6048
  console.log(example3);
};

test();