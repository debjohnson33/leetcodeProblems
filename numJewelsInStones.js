/*
  You're given strings jewels representing the types of stones that are jewels, and stones
  representing the stones you have. Each character in stones is a type of stone you have.
  You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/
const numJewelsInStones = (jewels, stones) => {
  const counts = {};
  let total = 0;

  for (let char of stones) {
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }

  for (let char of jewels) {
    if (counts[char]) {
      total += counts[char];
    }
  }
  return total;
};

const test = () => {
  const example1 = numJewelsInStones("aA", "aAAbbbb");
  console.log(example1); // 3
  const example2 = numJewelsInStones("z", "ZZ");
  console.log(example2); // 0
  const example3 = numJewelsInStones("baACcd", "Ttijkhabcd");
  console.log(example3); // 4
};

test();
