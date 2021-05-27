/*
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.

Example 1:
Input:
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
Note:

The boundaries of each input argument are 1 <= left <= right <= 10000.
*/

const selfDividingNumbers = (left, right) => {
  const result = [];

  const selfDividingTest = (num) => {
    return num.toString().split('').every((char) => {
      if (Number(char) === 0 || num % Number(char) !== 0) {
        return false;
      }
      return true;
    });
  };

  for (let i = left; i <= right; i++) {

    if (selfDividingTest(i)) {
      result.push(i);
    }
  }
  return result;
};

const test = () => {
  const example1 = selfDividingNumbers(1, 22);
  console.log(example1);
  const example2 = selfDividingNumbers(8, 30);
  console.log(example2);
  const example3 = selfDividingNumbers(45, 60);
  console.log(example3);
};

test();