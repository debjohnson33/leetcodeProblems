/*
Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.

Example 1:

Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
Example 2:

Input: arr = [1,2]
Output: 3
Explanation: There are only 2 subarrays of odd length, [1] and [2]. Their sum is 3.
Example 3:

Input: arr = [10,11,12]
Output: 66

Constraints:

1 <= arr.length <= 100
1 <= arr[i] <= 1000
*/

const sumOddLengthSubarrays = (arr) => {
  let sum = 0;
  let k = 1;

  while (arr.length >= k) {
    for (let i = 0; i < arr.length - k + 1; i++) {
      let subArray = arr.slice(i, i + k);
      sum += subArray.reduce((a, b) => a + b, 0);
    }
    k += 2;
  }
  return sum;
};

const test = () => {
  const example1 = sumOddLengthSubarrays([1,4,2,5,3]);
  console.log(example1); // 58
  const example2 = sumOddLengthSubarrays([1,2]);
  console.log(example2); // 3
  const example3 = sumOddLengthSubarrays([10,11,12]);
  console.log(example3); // 66
};

test();
