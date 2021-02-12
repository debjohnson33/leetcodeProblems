/*
Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.
*/

const arrayStringsAreEqual = (word1, word2) => {
  let word1String = word1.join('');
  let word2String = word2.join('');

  if (word1String === word2String) {
    return true;
  }

  return false;
};

const test = () => {
  const example1 = arrayStringsAreEqual(["ab", "c"], ["a", "bc"]);
  console.log(example1);
  const example2 = arrayStringsAreEqual(["a", "cb"], ["ab", "c"]);
  console.log(example2);
  const example3 = arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]);
  console.log(example3);
};

test();

