/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

const majorityElement = (nums) => {
  const majority = nums.length / 2;
  const counts = {};

  for (let num of nums) {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }
  for (let num of nums) {
    if (counts[num] > majority) {
      return num;
    }
  }
};

const test = () => {
  const example1 = majorityElement([2,2,1,1,1,2,2]);
  console.log(example1);  // 2
  const example2 = majorityElement([3,2,3]);
  console.log(example2); // 3
};

test();