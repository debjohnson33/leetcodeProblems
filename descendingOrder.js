/*
From Codewars:
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function descendingOrder(n){
  let sorted = n.toString().split('').sort((a,b) => b - a).join('');

  return Number(sorted);
}

const test = () => {
  const example1 = descendingOrder(42145);
  console.log(example1); // 54421
  const example2 = descendingOrder(145263);
  console.log(example2); // 54421
  const example3 = descendingOrder(123456789);
  console.log(example3); // 54421
};

test();
