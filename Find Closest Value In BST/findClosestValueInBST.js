// Recursive Approach

function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, tree.value)
  //declare a helper function that takes the BST, target value and a temporary closet value as arguments. 
  //Similar to BST insertion, we can initialize a variable to hold the temporaty closest value. That value
  //will change depending on the distance from it to the target value. We have chosen to call the helper function 
  //with the tree, target and the root value. 
  }
  
  function findClosestValueInBstHelper(tree, target, closest) {
  //Inside the helper function, declare a base case as this approach will be using a recursive solution.
  //if the tree is strictly equal to null (meaning we have hit a leaf), return the closest value. Say
  //we start with the root as the closest value. If there are no more nodes in the tree, the root would
  //be the final closest value.
      if (tree === null) return closest;
      
  //Once we have analyzed the root, we move on to the child nodes. We check if the absolute value of the difference 
  //between the target and the closest value is greater than the absolute value between the target and the current node value.
  //If that comparison is truthy, then reassign the value of the closest variable to equal the current node value. Essentially,
  //we want the closest value to be the node value that is closest to the target value. 
      if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
          closest = tree.value;
      }
      
  
  //Assuming the BST has 2 branches, a left and a right branch, we want to traverse through only one side. This depends on the 
  //on the value of the target and the initial node value. If the target value is less than the current node value, it means
  //that any number greater than the current node value (all numbers on the right tree branch) is farther away from the target.
  //Therefore, we just want to traverse through the left side of the BST. That is why we recursively call the helper function
  //to complete the 2 previous steps. The goal is to traverse all the tree until we reach the leaves and return the final closest
  //value. 
      if (target < tree.value) {
          return findClosestValueInBstHelper(tree.left, target, closest);
      } else if (target > tree.value) {
  //Similarly, if the target value is greater than the current node value, it means
  //that any number less than the current node value (all numbers on the left tree branch) is farther away from the target.
  //Therefore, we just want to traverse through the right side of the BST. That is why we recursively call the helper function
  //to complete the 2 initial steps of the helper function.
          return findClosestValueInBstHelper(tree.right, target, closest);
      } else {
  //the final case is where the target value is equal to the current node value. This would logically be the closest value. Thus,
  //we return the closest value at this point. There is no need to continue traversing through the BST. 
          return closest;
      }
  }
