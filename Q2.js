//Given a Binary Search Tree with all unique values and two keys. Find the distance between two nodes in BST. The given keys always exist in BST.

class TreeNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findDistance(root, node1, node2) {
    // Step 1: Find the Lowest Common Ancestor (LCA)
    const lca = findLCA(root, node1, node2);
  
    // Step 2: Calculate the distance from LCA to each node
    const distance1 = findDistanceFromNode(lca, node1);
    const distance2 = findDistanceFromNode(lca, node2);
  
    // Step 3: Calculate the distance between the two nodes
    const distance = distance1 + distance2;
  
    return distance;
  }
  
  function findLCA(root, node1, node2) {
    if (!root || root.val === node1 || root.val === node2) {
      return root;
    }
  
    if (root.val > node1 && root.val > node2) {
      return findLCA(root.left, node1, node2);
    }
  
    if (root.val < node1 && root.val < node2) {
      return findLCA(root.right, node1, node2);
    }
  
    return root;
  }
  
  function findDistanceFromNode(node, target) {
    if (!node) {
      return 0;
    }
  
    if (node.val === target) {
      return 0;
    }
  
    if (node.val > target) {
      return 1 + findDistanceFromNode(node.left, target);
    }
  
    if (node.val < target) {
      return 1 + findDistanceFromNode(node.right, target);
    }
  }
  
  // Create the Binary Search Tree
  const root = new TreeNode(8);
  root.left = new TreeNode(3);
  root.right = new TreeNode(10);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(6);
  root.left.right.left = new TreeNode(4);
  root.left.right.right = new TreeNode(7);
  root.right.right = new TreeNode(14);
  root.right.right.left = new TreeNode(13);
  
  // Define the two nodes
  const node1 = 6;
  const node2 = 14;
  
  // Find the distance between the two nodes
  const distance = findDistance(root, node1, node2);
  
  console.log('The distance between the two keys:', distance);
  