/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
*/
debugger;
const firstUniqChar = (s) => {
  const charsCount = {};

  for (let char of s) {
    charsCount[char] ? charsCount[char]++ : charsCount[char] = 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (charsCount[s[i]] > 1) {
      continue;
    }
    if (charsCount[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};


const test = () => {
  const example1 = firstUniqChar("leetcode"); // 0
  console.log(example1);
  const example2 = firstUniqChar("loveleetcode"); // 2
  console.log(example2);
  const example3 = firstUniqChar("reading"); // -1
  console.log(example3);
};

test();