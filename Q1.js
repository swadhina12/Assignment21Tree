//You are given a binary tree. The binary tree is represented using the TreeNode class. Each TreeNode has an integer value and left and right children, represented using the TreeNode class itself. Convert this binary tree into a binary search tree.

class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function convertToBST(root) {
  // Step 1: Perform in-order traversal to obtain sorted list
  const values = [];
  inorderTraversal(root, values);

  // Step 2: Create a new BST and insert values
  const newRoot = buildBST(values, 0, values.length - 1);
  return newRoot;
}

function inorderTraversal(node, values) {
  if (!node) {
    return;
  }

  inorderTraversal(node.left, values);
  values.push(node.val);
  inorderTraversal(node.right, values);
}

function buildBST(values, start, end) {
  if (start > end) {
    return null;
  }

  const mid = Math.floor((start + end) / 2);
  const newNode = new TreeNode(values[mid]);

  newNode.left = buildBST(values, start, mid - 1);
  newNode.right = buildBST(values, mid + 1, end);

  return newNode;
}
//You can test the implementation with the provided example:
// Create the binary tree
const root = new TreeNode(10);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(8);
root.left.right = new TreeNode(4);

// Convert the binary tree to a binary search tree
const newRoot = convertToBST(root);

// Print the new binary search tree (in-order traversal)
function inorderTraversal(node) {
  if (!node) {
    return;
  }

  inorderTraversal(node.left);
  console.log(node.val);
  inorderTraversal(node.right);
}

inorderTraversal(newRoot);
