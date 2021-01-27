const reverseString = (s) => {
  debugger;
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start += 1;
    end -= 1;
  }
  return s;
};

const test = () => {
  const example1 = reverseString(["h","e","l","l","o"]
  );
  console.log(example1);
  const example2 = reverseString(["H","a","n","n","a","h"]);
  console.log(example2);
  const example3 = reverseString(["b","a","n","a","n","a"]);
  console.log(example3);
};

test();