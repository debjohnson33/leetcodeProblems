var kidsWithCandies = function(candies, extraCandies) {
  let results = [];
  let largest = 0;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > largest) {
      largest = candies[i];
    }
  }
  for (let j = 0; j < candies.length; j++) {
    if ((candies[j] + extraCandies) >= largest) {
      results.push(true);
    } else {
      results.push(false);
    }
  }

  return results;
};

function test() {
  example1 = kidsWithCandies([2,3,5,1,3], 3);
  console.log(example1);
  example2 = kidsWithCandies([4,2,1,1,2], 1);
  console.log(example2);
  example3 = kidsWithCandies([12,1,12], 10);
  console.log(example3);
}

test();