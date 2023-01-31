/*
Given an array of strings wordsDict and two different strings that already exist in the array word1 and word2, return the shortest distance between these two words in the list.

Example 1:

Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
Output: 3
Example 2:

Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "makes", word2 = "coding"
Output: 1


Constraints:

2 <= wordsDict.length <= 3 * 104
1 <= wordsDict[i].length <= 10
wordsDict[i] consists of lowercase English letters.
word1 and word2 are in wordsDict.
word1 != word2

*/

const shortestWordDistance = (wordsDict, word1, word2) => {
  let minDiff = Infinity;
  let firstIdx = null;
  let secondIdx = null;
  for(let i = 0; i < wordsDict.length; i++) {
      let word = wordsDict[i];
      if(word == word1) firstIdx = i;
      if(word == word2) secondIdx = i;

      if(firstIdx !== null && secondIdx !== null) {
          minDiff = Math.min(minDiff, Math.abs(firstIdx - secondIdx));
      }
  }
  return minDiff;
};

const test = () => {
  const example1 = shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice");
  console.log(example1); // 3
  const example2 = shortestWordDistance(["practice", "makes", "perfect", "coding", "makes"], "makes", "coding");
  console.log(example2); // 1
};

test();