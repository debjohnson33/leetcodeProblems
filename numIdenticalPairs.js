const numIdenticalPairs = (nums) => {
  let pairs = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && i < j) {
        pairs++;
      }
    }
  }
  return pairs;
};

const test = () => {
  example1 = numIdenticalPairs([1,2,3,1,1,3]);
  console.log(example1); // 4
  example2 = numIdenticalPairs([1,1,1,1]);
  console.log(example2); // 6
  example3 = numIdenticalPairs([1,2,3]);
  console.log(example3); // 0
};

test();