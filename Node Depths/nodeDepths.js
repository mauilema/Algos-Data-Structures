function nodeDepths(root) {
    const stack = [{"node": root, "depth": 0}]; // declare a const variable "stack" to store an object. The first key "node" has the root as it's value. The second key "depth" has this nodes depth which is 0 for the root.
      //Other nodes will be pushed into this stack. We will apply the LIFO logic, where the last element inserted will be the first one to be taken out.
      
      let totalDepthSum = 0; //declare a variable totalDepthSum that initially stores the number 0. This variable will serve as an accumulator for the total sum of each nodes depth as we traverse the tree. 
      
      while (stack.length > 0) { //declare a while loop that runs the block code as long as the length of the stack array is greater than 0 (not empty). 
          
          const { node, depth } = stack.pop(); //destructure node and depth from the object that is popped off of the stack array. For the root object, the value of "node"  would be root and the value of "depth" would be 0.
          
          if (node === null ) continue; //this conditional makes sure that we don't add a depth value for each leaf. The leaves will be pushed into the stack but their depth values will not be added to the total depth sum.
          
          totalDepthSum += depth; //get the depth from the object that has just been popped off of the stack. Add that depth to the running total depth sum. 
          
          stack.push({"node": node.left, "depth": depth + 1}); //push the removed node's left child into the stack. The "depth" key will have a value of depth + 1. This is because we have gone down one level and the depth
          //of a child node is the depth of it's parent plus 1. 
          
          stack.push({"node": node.right, "depth": depth + 1}); //push the removed node's right child into the stack. The "depth" key will have a value of depth + 1. This is because we have gone down one level and the depth
          //of a child node is the depth of it's parent plus 1. 
      }
      return totalDepthSum; //once the while loop is completed, we should have visited all the nodes, calculated it's depth, added those depths to the running total depth sum. Therefore, returning totalDepthSum completes this function.
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
