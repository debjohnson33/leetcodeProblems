/*
  Given two arrays, write a function to compute their intersection.

  Example 1:

  Input: nums1 = [1,2,2,1], nums2 = [2,2]
  Output: [2]
  Example 2:

  Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
  Output: [9,4]
  Note:

  Each element in the result must be unique.
  The result can be in any order.
*/

const intersection = (nums1, nums2) => {
  if (nums1.length === 0 || nums2.length === 0) {
    return [];
  }

  let set1 = new Set();
  let set2 = new Set();
  let results = [];

  for (let i = 0; i < nums1.length; i++) {
    set1.add(nums1[i]);
  }
  for (let j = 0; j < nums2.length; j++) {
    set2.add(nums2[j]);
  }
  if (set1.size <= set2.size) {
    for (let num of set1) {
      if (set2.has(num)) {
        results.push(num);
      }
    }
  } else {
    for (let num of set2) {
      if (set1.has(num)) {
        results.push(num);
      }
    }
  }

  return results;
};

const test = () => {
  const example1 = intersection([1,2,2,1], [2,2]);
  console.log(example1);
  const example2 = intersection([4,9,5], [9,4,9,8,4]);
  console.log(example2);
};

test();
