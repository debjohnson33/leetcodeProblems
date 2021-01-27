/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const maxDepth = (root) => {
  if (root === null) {
    return 0;
  } else {
    let leftHeight = maxDepth(root.left);
    let rightHeight = maxDepth(root.right);
    return Math.max(leftHeight, rightHeight);
  }

};

// This code works on the array, but LeetCode wants a tree traversal with nodes type of answer -- see the top definition of a binary tree node
// const maxDepth = (root) => {
//   if (root.length === 0) {
//     return 0;
//   }
//   if (root.length === 1) {
//     return 1;
//   }
//   let depth = 1;

//   for (let i = 1; i < root.length; i += 2) {
//     if (root[i] !== null || root[i + 1] !== null) {
//       depth++;
//     }
//   }
//   return depth;
// };

const test = () => {
  const example1 = maxDepth([3,9,20,null,null,15,7]);
  console.log(example1);
  const example2 = maxDepth([]);
  console.log(example2);
  const example3 = maxDepth([1]);
  console.log(example3);
  const example4 = maxDepth([1,null,2]);
  console.log(example4);
};

test();

