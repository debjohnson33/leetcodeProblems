function ListNode(val) {
  this.val = val;
  this.next = null;
}

let head = new ListNode(4);
let five = new ListNode(5);
head.next = five;
let one = new ListNode(1);
five.next = one;
let nine = new ListNode(9);
one.next = nine;
nine.next = 'tail';

// would need to start at head and loop through
// when val of node equals the value to be deleted
// use the deleteNode function
const deleteNode = (node) => {
  if (node && node.next) {
    node.val = node.next.val;
    node.next = node.next.next;
  }
};

const test = () => {
  const example1 = deleteNode(5);
  console.log(example1);
};

test();
