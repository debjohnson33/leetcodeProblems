const runningSum = (nums) => {
  const totals = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      totals.push(nums[i]);
    } else {
      totals.push(nums[i] + totals[i - 1])
    }
  }

  return totals;
};

const test = () => {
  const example1 = runningSum([1,2,3,4]);
  console.log(example1);
  const example2 = runningSum([1,1,1,1,1]);
  console.log(example2);
  const example3 = runningSum([3,1,2,10,1]);
  console.log(example3);
};

test();