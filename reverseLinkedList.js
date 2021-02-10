/**
 * Definition for singly-linked list.
  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
debugger;

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const reverseLinkedList = (head) => {
  let prev = null;
  let curr = head;
  let next = null;
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
let one = new ListNode(1);
let two = new ListNode(2);
one.next = two;
let three = new ListNode(3);
two.next = three;

const test = () => {
  const example = reverseLinkedList(one);
  console.log(example);
};

test();
