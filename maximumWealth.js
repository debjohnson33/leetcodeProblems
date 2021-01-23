const maximumWealth = (accounts) => {
  let richest = 0;
  for (let i = 0; i < accounts.length; i++) {
    let customer = accounts[i];
    let customerWealth = customer.reduce((total, num) => {
      return total + num;
    });
    if (customerWealth > richest) {
      richest = customerWealth;
    }
  }
  return richest;
};

const test = () => {
  const example1 = maximumWealth([[1,2,3],[3,2,1]]);
  console.log(example1); // 6
  const example2 = maximumWealth([[1,5],[7,3],[3,5]]);
  console.log(example2); // 10
  const example3 = maximumWealth([[2,8,7],[7,1,3],[1,9,5]]);
  console.log(example3); // 17
};

test();
