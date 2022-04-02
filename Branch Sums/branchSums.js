// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    const sums = [];
      computeBranchSums(root, 0, sums);
      return sums;
  }
  
  function computeBranchSums(node, runningSum, sums) {
      if (!node) return;
      
      const newRunningSum = runningSum + node.value;
      if (!node.left && !node.right) {
          sums.push(newRunningSum);
          return;
      }
      
      computeBranchSums(node.left, newRunningSum, sums);
      computeBranchSums(node.right, newRunningSum, sums);
  }
  

  