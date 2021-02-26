/*
Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

Example 1:

Input: s = "leetcodeisacommunityforcoders"
Output: "ltcdscmmntyfrcdrs"
Example 2:

Input: s = "aeiou"
Output: ""


Constraints:

1 <= s.length <= 1000
s consists of only lowercase English letters.

*/

const removeVowels = (s) => {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== 'a' && s[i] !== 'e' && s[i] !== 'i' && s[i] !== 'o' && s[i] !== 'u') {
      result += s[i];
    }
  }
  return result;
};

const test = () => {
  const example1 = removeVowels("leetcodeisacommunityforcoders");
  console.log(example1);
  const example2 = removeVowels("aeiou");
  console.log(example2);
  const example3 = removeVowels("helloworld");
  console.log(example3);
};

test();