class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    breadthFirstSearch(array) { // this class method takes in an empty array as the input argument. Eventually, this array will store all the node names in alphabetical order.
       
       const queue = [this]; //declare a const variable "queue" that stores the root node. This array will serve as a queue where the first node in is the first node out; aka FIFO.
       
       while (queue.length > 0) {//use a while loop to traverse the queue while it is not empty. Node's will be added into the queue, starting from the root node. Then it's
           //children from left to right, top to bottom (level by level). 
           
       const currentNode = queue.shift(); //declare a const variable "currentNode". It will store the current node that was just shifted from the left beginning of the array. The shift
           //method is used to get the FIFO effect of a queue.
  
       array.push(currentNode.name); //push the name of the current node (which was just shifted off of the queue) into the original input array. 
       
      
       for (const child of currentNode.children) { //use a for of loop to access each child belonging to the current node (the one just shifted off of the queue). currentNode.children
           //is an array itself. That is why we use a for of loop to access it's elements which are objects. We are only interested in the value of those elements. 
           
           queue.push(child) //push each of the current node's child into the queue. The leftmost child will be shifted off of the array in the next step which is the first line of code
           //in this while loop. 
       }	 
       }
       return array; //at this point, all of the nodes names and the children's names should have been pushed into the input array; from left to right and in alphabetical order. 
    }
  }
