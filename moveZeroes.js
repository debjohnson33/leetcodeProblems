const moveZeroes = (nums) => {
  let anchor = 0;

  for (let explorer = 0; explorer < nums.length; explorer++) {
    if (nums[explorer] !== 0) {
      let temp = nums[anchor];
      nums[anchor] = nums[explorer];
      nums[explorer] = temp;
      anchor++;
    }
  }
  return nums;
};

const test = () => {
  const example1 = moveZeroes([0,1,0,3,12]);
  console.log(example1);
  const example2 = moveZeroes([0,0,1]);
  console.log(example2);
  const example3 = moveZeroes([]);
  console.log(example3);
};

test();