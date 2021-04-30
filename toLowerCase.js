/*
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Example 1:

Input: "Hello"
Output: "hello"
Example 2:

Input: "here"
Output: "here"
Example 3:

Input: "LOVELY"
Output: "lovely"
*/

const toLowerCase = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    code >= 65 && code <= 90 ? result += String.fromCharCode(code + 32) : result += str[i];
  }

  return result;
};

const test = () => {
  const example1 = toLowerCase('Hello');
  console.log(example1);
  const example2 = toLowerCase('al&phaBET');
  console.log(example2);
  const example3 = toLowerCase('LOVELY');
  console.log(example3);
};

test();