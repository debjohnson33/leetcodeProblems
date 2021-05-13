/*
You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.

The population of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1]. Note that the person is not counted in the year that they die.

Return the earliest year with the maximum population.

Example 1:

Input: logs = [[1993,1999],[2000,2010]]
Output: 1993
Explanation: The maximum population is 1, and 1993 is the earliest year with this population.
Example 2:

Input: logs = [[1950,1961],[1960,1971],[1970,1981]]
Output: 1960
Explanation:
The maximum population is 2, and it had happened in years 1960 and 1970.
The earlier year between them is 1960.

Constraints:

1 <= logs.length <= 100
1950 <= birthi < deathi <= 2050

*/

const maximumPopulation = (logs) => {
  const counts = {};
  let maximum = 0;
  let year = 0;

  for (const years of logs) {
    for (let i = years[0]; i < years[1]; i++) {
      counts[i] ? counts[i]++ : counts[i] = 1;
    }
  }

  for (let i = 1950; i <= 2050; i++) {
    if (counts[i] != undefined) {
      if (counts[i] > maximum) {
        year = i;
        maximum = Math.max(maximum, counts[i]);
      }
    }
  }
  return year;
};

const test = () => {
  const example1 = maximumPopulation([[1993,1999],[2000,2010]]);
  console.log(example1); // 1993
  const example2 = maximumPopulation([[1950,1961],[1960,1971],[1970,1981]]);
  console.log(example2); // 1960
  const example3 = maximumPopulation([[1950,2002],[1955,1998],[1965,2000]]);
  console.log(example3); // 1965
};

test();
