const defangIPaddr = (address) => {
  let addressArr = address.split('');
  let defanged = addressArr.map(element => {
    if (element === '.') {
      return '[.]';
    } else {
      return element;
    }
  })
  return defanged.join('');
};

const test = () => {
  const example1 = defangIPaddr('1.1.1.1');
  console.log(example1);
  const example2 = defangIPaddr('255.100.50.0');
  console.log(example2);
};

test();

