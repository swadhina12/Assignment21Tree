//Write a program to convert a binary tree to a doubly linked list.

class TreeNode {
    constructor(value) {
      this.val = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class DoublyLinkedListNode {
    constructor(value) {
      this.val = value;
      this.prev = null;
      this.next = null;
    }
  }
  
  function convertToDoublyLinkedList(root) {
    if (!root) {
      return null;
    }
  
    let prev = null;
    let head = null;
  
    function convertHelper(node) {
      if (!node) {
        return;
      }
  
      // Convert left subtree
      convertHelper(node.left);
  
      // Create a new doubly linked list node
      const listNode = new DoublyLinkedListNode(node.val);
  
      // Set the previous and next pointers
      listNode.prev = prev;
      if (prev) {
        prev.next = listNode;
      } else {
        head = listNode;
      }
      prev = listNode;
  
      // Convert right subtree
      convertHelper(node.right);
    }
  
    // Start the conversion process
    convertHelper(root);
  
    return head;
  }
  
  // Create the Binary Tree
  const root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(20);
  root.right.left = new TreeNode(30);
  root.right.right = new TreeNode(35);
  
  // Convert the Binary Tree to Doubly Linked List
  const head = convertToDoublyLinkedList(root);
  
  // Traverse the Doubly Linked List and print the values
  let current = head;
  let result = '';
  while (current) {
    result += current.val + ' ';
    current = current.next;
  }
  
  console.log(result.trim());
  