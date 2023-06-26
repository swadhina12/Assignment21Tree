//Write a program to connect nodes at the same level.

class TreeNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
      this.next = null;
    }
  }
  
  function connectNodesAtSameLevel(root) {
    if (!root) {
      return null;
    }
  
    let queue = [root];
  
    while (queue.length > 0) {
      const levelSize = queue.length;
  
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
  
        // Connect the current node to the next node at the same level
        if (i < levelSize - 1) {
          node.next = queue[0];
        }
  
        // Add the left and right children to the queue
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
  }
  
  // Create the Binary Tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.right = new TreeNode(3);
  root.left.left = new TreeNode(4);
  root.left.right = new TreeNode(5);
  root.right.left = new TreeNode(6);
  root.right.right = new TreeNode(7);
  
  // Connect the nodes at the same level
  connectNodesAtSameLevel(root);
  
  // Traverse the connected nodes and print the connections
  let current = root;
  let result = '';
  while (current) {
    let temp = current;
    while (temp) {
      result += temp.val + ' → ';
      temp = temp.next;
    }
    result += '-1\n';
    current = current.left;
  }
  
  console.log(result.trim());
  