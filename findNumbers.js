// Given an array nums of integers, return how many of them contain an even number of digits.
const findNumbers = (nums) => {
  let count = 0;
  for (let num of nums) {
    if (num.toString().length % 2 === 0) {
      count++;
    }
  }
  return count;
};

const test = () => {
  const example1 = findNumbers([12,345,2,6,7896]);
  console.log(example1); // 2
  const example2 = findNumbers([555,901,482,1771]);
  console.log(example2); // 1
  const example3 = findNumbers([234, 3355, 123, 2365, 22, 456]);
  console.log(example3); // 3
};

test();