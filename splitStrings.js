/*
From CodeWars:

Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

const splitStrings = (str) => {
  let arr = [];
  let i = 0;
  while (i < str.length) {
    if (str[i + 1]) {
      arr.push(str[i] + str[i + 1]);
    } else {
      arr.push(str[i] + '_');
    }
    i += 2;
  }
  return arr;
};

const test = () => {
  const example1 = splitStrings('abc');
  console.log(example1); // ['ab', 'c_']
  const example2 = splitStrings('abcdef');
  console.log(example2); // ['ab', 'cd', 'ef']
};

test();