const shuffle = (nums, n) => {
  const results = [];
  let firstHalf = nums.slice(0, n);
  let secondHalf = nums.slice(n);

  for (let i = 0; i < firstHalf.length; i++) {
    results.push(firstHalf[i], secondHalf[i]);
  }
  return results;
};

const test = () => {
  const example1 = shuffle([2,5,1,3,4,7], 3);
  console.log(example1);
  const example2 = shuffle([1,2,3,4,4,3,2,1], 4);
  console.log(example2);
  const example3 = shuffle([1,1,2,2], 2);
  console.log(example3);
};

test();