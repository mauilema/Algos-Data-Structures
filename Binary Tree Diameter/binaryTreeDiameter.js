class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function binaryTreeDiameter(tree) {
    return getTreeInfo(tree).diameter; //return the result of calling a helper function named "getTreeInfo". The helper function returns an object with diameter and height properties.
      //Therefore we use dot notation to access the value of the diameter key in that final object. 
  }
  
  function getTreeInfo(tree) { //we will be using Depth First Search to traverse the tree. As the calls to the left branch are made, they will accumulate in the call stack. This
      //will help us traverse the tree until the left most leaf. At that point the recursive call on that leaf's left child is solved first. Then the recursive call on that leaf's 
      //right child is solved. After that we continue to solve the rest of the recursive calls on the left children accumulated on the stack. As we solve each, we also solve it's right
      //children counterparts. 
      
      if (tree === null) { //this if conditional statement serves as the base case. Once we reach a leaf, we're returning a new object that has diameter and height properties. We pass
          //the number 0 as parameters for both the diameter and height because a leaf has no diameter and height. It is the lowest level in the tree. We do need to use those 0 values
          //to calculate the leaf's parent diameter and height properties. Therefore returning these TreeInfo object is necessary. 
          return new TreeInfo(0,0);
      }
      
      const leftTreeInfo = getTreeInfo(tree.left); //declare a const variable "leftTreeInfo" that stores the result of make a recursive call with the node's left child. 
      const rightTreeInfo = getTreeInfo(tree.right); //declare a const variable "rightTreeInfo" that stores the result of make a recursive call with the node's right child. 
      
      
      const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height; //declare a const variable "longestPathThroughRoot" that stores the value of adding the current node's left child height plus its right child height.
      //The longest path through a root should include the nodes on both sides of it's children. No matter how large one side of it's branch is, adding the other side will increase the total length of this path; unless the node
      //has only one branch. 
      
      const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter); //declare a const variable "maxDiameterSoFar" that store the maximum of a node's left child diameter vs its right child diameter 
      //The max diameter depends on how many nodes there are on each branch. The more nodes, the more edges. More edges increases the size of the diameter. 

      const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar); //declare a const variable "currentDiameter"  that stores the maximum of the longestPathThroughRoot vs maxDiameterSoFar.
      //current diameter can be either of the 2 parameters in the max method because a node can have more child nodes on one of it's branches or more child nodes on a combination between both branches.
    
      const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height); //declare a const variable "current Height" that adds 1 to the maximum value between a node's left child height and its right child height. 
      //the reason why you choose between both side's height is because we want the height that is from the branch that is lower in the binary tree. This translates to the greater of the heights which we need to 
      //calculate a node's height. Once we have the largest height between it's children, we simply add 1 because we're going up a level in the tree. 

      return new TreeInfo(currentDiameter, currentHeight) //once all the recursive calls have ran, return a new instance of "TreeInfo" with the last current Diameter and current Height as properties. We will be accessing
      //the diameter value from this object. 
  }
  
  class TreeInfo {
      constructor(diameter, height) {
          this.diameter = diameter;
          this.height = height;
      }
  }

