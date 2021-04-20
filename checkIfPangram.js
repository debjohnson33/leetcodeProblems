/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

Example 1:

Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false

Constraints:

1 <= sentence.length <= 1000
sentence consists of lowercase English letters.
*/

const checkIfPangram = (sentence) => {
  const count = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0};
  if (sentence.length < 26) {
    return false;
  }

  for (let i = 0; i < sentence.length; i++) {
    count[sentence[i]]++;
  }

  for (let char in count) {
    if (count[char] === 0) {
      return false;
    }
  }
  return true;
};

const test = () => {
  const example1 = checkIfPangram('thequickbrownfoxjumpsoverthelazydog');
  console.log(example1);
  const example2 = checkIfPangram('leetcode');
  console.log(example2);
  const example3 = checkIfPangram('pajamasareinfashionthesedaysandilikethem');
  console.log(example3);
};

test();