/*
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.

Example 1:

Input: s = "book"
Output: true
Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.
Example 2:

Input: s = "textbook"
Output: false
Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
Notice that the vowel o is counted twice.
Example 3:

Input: s = "MerryChristmas"
Output: false
Example 4:

Input: s = "AbCdEfGh"
Output: true

Constraints:

2 <= s.length <= 1000
s.length is even.
s consists of uppercase and lowercase letters.
*/

const havlesAreAlike = (s) => {
  let firstHalfCount = 0;
  let secondHalfCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  let firstHalf = s.substring(0, s.length / 2);
  let secondHalf = s.substring(s.length / 2)

  for (let i = 0; i < firstHalf.length; i++) {
    if (vowels.includes(firstHalf[i])) {
      firstHalfCount++;
    }
  }

  for (let j = 0; j < secondHalf.length; j++) {
    if (vowels.includes(secondHalf[j])) {
      secondHalfCount++;
    }
  }

  return firstHalfCount === secondHalfCount ? true : false;
};

const test = () => {
  const example1 = havlesAreAlike('book');
  console.log(example1);
  const example2 = havlesAreAlike('textbook');
  console.log(example2);
  const example3 = havlesAreAlike('AbCdEfGh');
  console.log(example3);
};

test();