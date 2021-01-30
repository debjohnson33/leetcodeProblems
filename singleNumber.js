/*
  Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

  Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?
*/
const singleNumber = (nums) => {
  if (nums.length === 1) {
    return nums[0];
  }
  nums.sort();
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }

};
// First pass using extra memory with an object
// Could also use a Set, adding if the num isn't there and removing if it is
//   Then return the only number left in the Set

// const singleNumber = (nums) => {
//   const counts = {};
//   if (nums.length === 1) {
//     return nums[0];
//   }
//   for (let i = 0; i < nums.length; i++) {
//     if (counts[nums[i]]) {
//       counts[nums[i]]++;
//     } else {
//       counts[nums[i]] = 1;
//     }
//   }
//   for (let j = 0; j < nums.length; j++) {
//     if (counts[nums[j]] === 1) {
//       return nums[j];
//     }
//   }
// };

const test = () => {
  example1 = singleNumber([2,2,1]);
  console.log(example1);
  example2 = singleNumber([4,1,2,1,2]);
  console.log(example2);
  example3 = singleNumber([1,4,1,5,4,6,7,3,2,5,7,3,2]);
  console.log(example3);
};

test();
