/*
 Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the
array, and it should return false if every element is distinct.

*/

const containsDuplicate = (nums) => {
  const counts = {};
  let result = false;
  if (nums.length === 0 || nums.length === 0) {
    return result;
  }

  for (let num of nums) {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }

  for (let num of nums) {
    if (counts[num] > 1) {
      result = true;
    }
  }
  return result;
};

const test = () => {
  const example1 = containsDuplicate([1,2,3,1]);
  console.log(example1);
  const example2 = containsDuplicate([1]);
  console.log(example2);
  const example3 = containsDuplicate([1,1,1,3,3,4,3,2,4,2]);
  console.log(example3);
};

test();
