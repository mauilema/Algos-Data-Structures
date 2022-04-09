//Iterative Approach. Time Complexity O(n) where n is the number of nodes in the tree. Space Complexity O(n) because there will be a time
//where we will have n/2 number of leaves in the queue at the same time. That converts to O(n).

//This function will be using Breath First Search where we traverse the Binary tree level by level. We will cover each tree depth from top to bottom. We will be using a 
//queue to maneuver through all the nodes in the tree one by one in FIFO order. 

function invertBinaryTree(tree) {
    const queue = [tree]; //declare an array "queue" that stores the tree passed as the argument. 

    while (queue.length) { //use a while loop to run a block of code while the queue array is not empty; meaning queue.length is truthy. This will helps us traverse 
			//through all the nodes in the queue; hence all the nodes in the tree. It will be done once there are no nodes in the queue. 
			
        let currentNode = queue.shift(); //declare a variable "currentNode" that stores the first element that is shifted from the queue. The shift method is used here
			//to get the FIFO (first in first out) effect of a queue. 

        if (currentNode === null) continue; //this conditional if statement skips the leaves. While the leaves will be swapped and pushed into the queue. We will not 
			//be swapping or pushing any leaf's children into the queue. It is not necessary since a leaf has no children. It marks the end of a tree branch. 

        swapNodes(currentNode); //call a helper function that will swap the left and right children of the current node. 

        queue.push(currentNode.left); //push the left child of the current node into the queue.
        queue.push(currentNode.right); //push the right child of the current node into the queue.
    }
}


function swapNodes(node) { //this function takes a node and swaps it's left and right children. 
    const tempNode = node.left; //declare a const variable that stores the node's left child. 
    node.left = node.right; //reassign the value of the node's left child with the value of it's right child. 
    node.right = tempNode; //reassign the value of the node's right child with the value stored in the tempNode variable. That value is the node's left child. 
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
