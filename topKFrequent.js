/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]


Constraints:

1 <= nums.legth <= 105
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.


Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/

const topKFrequent = (nums, k) => {
  let map = new Map();

  for (let num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }
  let arr = [];
  for (let [key, value] of map) {
    arr.push([key, value]);
  }
  arr.sort((a, b) => {
    return b[1] - a[1];
  });
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(arr[i][0]);
  }
  return result;
};

const test = () => {
  const example1 = topKFrequent([1,1,1,2,2,3], 2);
  console.log(example1);
  const example2 = topKFrequent([0,0,1,1,1,2,2,3,3,4], 3);
  console.log(example2);
  const example3 = topKFrequent([1], 1);
  console.log(example3);
};

test();
