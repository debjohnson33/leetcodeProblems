/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[i] <= 109
*/
debugger;
const merge = (nums1, m, nums2, n) => {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p >= 0) {
    if (p2 < 0) {
      break;
    }
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
  return nums1;
};

const test = () => {
  const example1 = merge([1,2,3,0,0,0], 3, [2,5,6], 3);
  console.log(example1);
  const example2 = merge([1], 1, nums2 = [], 0);
  console.log(example2);
  const example3 = merge([1,0], 1, [3], 1);
  console.log(example3);
};

test();