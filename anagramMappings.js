/*
Given two lists nums1 and nums2, and nums2 is an anagram of nums1. nums2 is an anagram of nums1 means nums2 is made by randomizing the order of the elements in nums1.

We want to find an index mapping mapping, from nums1 to nums2. A mapping mapping[i] = j means the ith element in nums1 appears in nums2 at index j.

These lists nums1 and nums2 may contain duplicates. If there are multiple answers, output any of them.

For example, given

nums1 = [12, 28, 46, 32, 50]
nums2 = [50, 12, 32, 46, 28]
We should return

[1, 4, 3, 2, 0]
as mapping[0] = 1 because the 0th element of nums1 appears at nums2[1], and mapping[1] = 4 because the 1st element of nums1 appears at nums2[4], and so on.

Note:

nums1, nums2 have equal lengths in range [1, 100].
nums1[i], nums2[i] are integers in range [0, 10^5].
*/

const anagramMappings = (nums1, nums2) => {
  const mappings = [];

  for (let i = 0; i < nums1.length; i++) {
    let index = nums2.indexOf(nums1[i]);
    console.log(nums2.indexOf(nums1[i]))
    mappings.push(index);
  }
  return mappings;
};

const test = () => {
  const example1 = anagramMappings([12,28,46,32,50], [50,12,32,46,28]);
  console.log(example1); // [1, 4, 3, 2, 0]
  const example2 = anagramMappings([6,5,4,8], [4,8,6,5]);
  console.log(example2); // [2, 3, 0, 1]
  const example3 = anagramMappings([21,55,83,22,93,20,34], [93,21,34,55,20,83,22]);
  console.log(example3); // [1,3,5,6,0,4,2]
};

test();