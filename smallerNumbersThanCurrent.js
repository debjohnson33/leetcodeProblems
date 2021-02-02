const smallerNumbersThanCurrent = (nums) => {
  const results = [];

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] !== nums[j] && nums[j] < nums[i]) {
        count++;
      }
    }
    results.push(count);
  }
  return results;
};

const test = () => {
  const example1 = smallerNumbersThanCurrent([8,1,2,2,3]);
  console.log(example1); // [4,0,1,1,3]
  const example2 = smallerNumbersThanCurrent([6,5,4,8]);
  console.log(example2); // [2,1,0,3]
  const example3 = smallerNumbersThanCurrent([7,7,7,7]);
  console.log(example3); // [0,0,0,0]
};

test();