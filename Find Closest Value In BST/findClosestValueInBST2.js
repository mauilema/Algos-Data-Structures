//Iterative Approach

function findClosestValueInBst(tree, target) {
    //declare a helper function that takes the BST, target value and a temporary closet value as arguments. 
    //Similar to BST insertion, we can initialize a variable to hold the temporaty closest value. That value
    //will change depending on the distance from it to the target value. We have chosen to call the helper function 
    //with the tree, target and the root value. 
    
      return findClosestValueInBstHelper(tree, target, tree.value)
    }
    
    function findClosestValueInBstHelper(tree, target, closest) {
        //declare a variable named currentNode that will assigned the value of the entire tree. This is only temporary as this variable will be reassigned a value depending 
        //on the comparison between the target value and the current node. 
        let currentNode = tree;
        while (currentNode !== null) { //this while loop will only run when the current node has branches; it will stop when we have reached the tree's leaves
            if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) { //if the absolute value of the difference between the target value and the current closest
                //value is greater than the absolute value of the difference between the target value and the current node value, than reassign the value of the closest variable to
                //the value of the current node. The point of this line is to get the value of the current node that is closest to the target and store it in the variable named "closest"
                closest = currentNode.value
            }
            //the next conditionals will determine which side of the tree to traverse; either left or right. The last condition covers the case where target value is equal to the current node value
            if (target < currentNode.value) {//if the target value is less than the current node value, we traverse left. The reason is that all numbers to the right of the current node are farther
                //away from the target. 
                currentNode = currentNode.left;//reassign the value of current node to the left value of that current node. This is because we're traversing on the left side of the tree and want to analyze the value
                //of the node located to the left of the current node. 
            } else if (target > currentNode.value) {//if the target value is greater than the current node value, we traverse right. The reason is that all numbers to the left of the current node are farther
                //away from the target.
                currentNode = currentNode.right;//reassign the value of current node to the right value of that current node. This is because we're traversing on the right side of the tree and want to analyze the value
                //of the node located to the right of the current node. 
            } else {
                break;//this is the case where the target value is equal to the current node value. Logically the fact that the values are the same means that this is the closest value to the target. 
            }
        
        }
        return closest;//return the value stored in the "closest" variable once the while loop is finished traversing. At this point the "closest" variable should have the current node value that is the closest
        //to the target value. Additionally, if the tree only has one node. It would skip the while loop because there are no brances. The closest value would be the value of the root. 
    }

