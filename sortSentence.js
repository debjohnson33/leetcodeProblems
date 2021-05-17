/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

Example 1:

Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
Example 2:

Input: s = "Myself2 Me1 I4 and3"
Output: "Me Myself and I"
Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.

Constraints:

2 <= s.length <= 200
s consists of lowercase and uppercase English letters, spaces, and digits from 1 to 9.
The number of words in s is between 1 and 9.
The words in s are separated by a single space.
s contains no leading or trailing spaces.


Input - string containing 2-200 chars
Output - Sorted sentence based on the digits placed at the end of each word
Complexity - ? Maybe O(n) or O(n^2) see above for constraints
Example - s = "is2 sentence4 This1 a3" => "This is a sentence"

Split into array
['is2', 'sentence4', 'This1', 'a3']

Place each word into its proper position
Remove the digit from the end of the word
First string: 'is2'
  Subtract 1 from the digit = 1
  Place 'is2' into array at 1 position without the digit on the end
  [ 0, 'is', 2, 3]
Second string: 'sentence4'
  Subtract 1 from the digit = 3
  Place 'sentence4' into array at 3 position without the digit on the end
  [ 0, 'is', 2, 'sentence']
Third string: 'This1'
  Subtract 1 from the digit = 0
  Place 'This1' into array at 0 position without the digit on the end
  ['This', 'is', 2, 'sentence']
Fourth string: 'a3'
  Subtract 1 from the digit = 2
  Place 'a3' into array at 2 position without the digit on the end
  ['This', 'is', 'a', 'sentence']

Join the array with spaces
Return the full sentence
*/

const sortSentence = (s) => {
  let sentenceArr = s.split(' ');
  const sorted = [];

  for (let word of sentenceArr) {
    let index = word[word.length - 1] - 1;
    let newWord = word.slice(0, word.length - 1);
    sorted[index] = newWord;
  }
  return sorted.join(' ');
};

const test = () => {
  const example1 = sortSentence("is2 sentence4 This1 a3");
  console.log(example1); // This is a sentence
  const example2 = sortSentence("Myself2 Me1 I4 and3");
  console.log(example2); // Me Myself and I
  const example3 = sortSentence("leetcode5 This1 from4 is3 problem2");
  console.log(example3); // This problem is from leetcode
};

test();
