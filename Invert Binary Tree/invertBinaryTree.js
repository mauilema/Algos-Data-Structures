function invertBinaryTree(tree) {
    if (tree === null) { //this conditional if statement is the base case. If a node is null, meaning it has no left or 
          //right children, then step out of this function. We want to avoid swapping a node's children if we reach a leaf. 
          return;
      } 
          const tempLeftVal = tree.left; //declare a variable that holds the value of the left child of a node.
          const tempRightVal = tree.right; //declare a variable that holds the value of the right child of a node. 
      
          tree.left = tempRightVal; //reassign the value of the left child of a node with the value of the right child of a node.
          tree.right = tempLeftVal; //reassign the value of the left child of a node with the value of the right child of a node.
      
          invertBinaryTree(tree.left); //recursively call this function on a node's left child until you reach the leaves which will be skipped. 
          invertBinaryTree(tree.right); //recursively call this function on a node's right child until you reach the leaves which will be skipped.
  
       //Usually you would return the inverted tree at the end. Except the prompt didn't ask for that. The built in test code
      //in Algo Expert takes care of that. 
      
  
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  

  