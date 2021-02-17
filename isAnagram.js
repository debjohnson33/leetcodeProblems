/*
Given two strings s and t , write a function to determine if t is an
anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your
solution to such case?

*/

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  if (s.split('').sort().join('') === t.split('').sort().join('')) {
    return true;
  } else {
    return false;
  }

};

const test = () => {
  const example1 = isAnagram("anagram", "nagaram");
  console.log(example1);
  const example2 = isAnagram("rat", "car");
  console.log(example2);
};

test();