/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';
  if (strs.length === 1) return strs[0];
  let answer = "";

  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[0][i] !== strs[j][i]) {
        return answer;
      }
    }
    answer += strs[0][i];
  }
  return answer;
};

const test = () => {
  const example1 = longestCommonPrefix(["flower","flow","flight"]);
  console.log(example1); // "fl"
  const example2 = longestCommonPrefix(["dog","racecar","car"]);
  console.log(example2); // ""
  const example3 = longestCommonPrefix(["roman","romana","romano"]);
  console.log(example3); // "roman"
};

test();

