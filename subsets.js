/*
Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.
*/

const subsets = (nums) => {
  let numSubSets = [];

  const makeSubSets = (nums, index, curr) => {
    if (index >= nums.length) {
      let temp = curr.slice();
      numSubSets.push(temp);
      return;
    }

    curr.push(nums[index]);
    makeSubSets(nums, index + 1, curr);
    curr.pop();
    makeSubSets(nums, index + 1, curr);
  }
  makeSubSets(nums, 0, []);
  return numSubSets;
};

const test = () => {
  const example1 = subsets([1,2,3]);
  console.log(example1); // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
  const example2 = subsets([0]);
  console.log(example2); // [[], [0]]
};

test();