debugger;
var twoSum = function(nums, target) {
  let results = [0, 0];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        results[0] = i;
        results[1] = j;
        break;
      }
    }
  }

  return results.sort();
};

function test() {
  let example1 = twoSum([2,7,11,15], 9);
  console.log(example1);
  let example2 = twoSum([3,3], 6);
  console.log(example2);
  let example3 = twoSum([3,2,4], 6);
  console.log(example3);
}

test();