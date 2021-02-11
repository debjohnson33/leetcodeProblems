/*
 Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

Example

For a = [2, 1, 3, 5, 3, 2], the output should be firstDuplicate(a) = 3.

There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

For a = [2, 2], the output should be firstDuplicate(a) = 2;

For a = [2, 4, 3, 5, 1], the output should be firstDuplicate(a) = -1.
*/
debugger;
function firstDuplicate(a) {
  const seen = new Array(a.length);

  for (let i = 0; i < seen.length; i++) {
    seen.push(0);
  }

  for (let j = 0; j < a.length; j++) {
    for (let k = 1; k < a.length; k++) {
      if (a[j] === a[k]) {
        seen[k] = 1;
      }
    }
  }

  for (let l = 0; l < seen.length; l++) {
    if (seen[l] === 1) {
      return a[l];
    }
  }

  return -1;
}

function test() {
  const example1 = firstDuplicate([2, 1, 3, 5, 3, 2]);
  console.log(example1);
  const example2 = firstDuplicate([2, 2]);
  console.log(example2);
  const example3 = firstDuplicate([2, 4, 3, 5, 1]);
  console.log(example3);
}

test();