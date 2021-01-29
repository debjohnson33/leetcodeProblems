/* Write a program that outputs the string representation of numbers from 1 to n.
But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”. */

const fizzBuzz = (n) => {
  const results = [];
  if (n === 0 || typeof n !== 'number') {
    return results;
  }
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push('FizzBuzz');
    } else if (i % 3 === 0) {
      results.push('Fizz');
    } else if (i % 5 === 0) {
      results.push('Buzz');
    } else {
      results.push(i.toString());
    }
  }
  return results;
};

const test = () => {
  const example1 = fizzBuzz(15);
  console.log(example1);
  const example2 = fizzBuzz(10);
  console.log(example2);
  const example3 = fizzBuzz(20);
  console.log(example3);
};

test();