/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
*/
const missingNumber = (nums) => {
  let sumNoneMissing = nums.length;
  let actualSum = 0;

  for (let i = 0; i < nums.length; i++) {
    sumNoneMissing += i;
    actualSum += nums[i];
  }
  return sumNoneMissing - actualSum;
};

const test = () => {
  const example1 = missingNumber([3,0,1]);
  console.log(example1); // 2
  const example2 = missingNumber([0,1]);
  console.log(example2); // 2
  const example3 = missingNumber([9,6,4,2,3,5,7,0,1]);
  console.log(example3); // 8
  const example4 = missingNumber([1]);
  console.log(example4); // 0
};

test();