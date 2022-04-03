
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  const sums = []; //declare a const variable that stores an empty array. Branch sums will eventually 
									// be added to this array.
	
	computeBranchSums(root, 0, sums);//call a helper function with the root, 0 value runningSum and the 
																	//sums array as arguments. 
	
	return sums;//Once all branch sums have been completed, return the sums array containing all branch
							//sum values. 
}

function computeBranchSums(node, runningSum, sums) {
	if (!node) return;//if we get to a node that has only a left or only a right child node, return at that missing
										//node. 
	
	const newRunningSum = runningSum + node.value;//declare a const variable that stores the current running sum plus
																								//the current node value.
	
	if (!node.left && !node.right) {//declare a conditional that checks if a node has no left and no right child nodes,
																	//then it must be a leaf.
		sums.push(newRunningSum);//since we have hit a leaf, push the branch sum to the sums array and return;
		return;
	}
	
	computeBranchSums(node.left, newRunningSum, sums);//recursively call the computeBranchSums function with the left node 
	//value, newRunninSum and sums array as arguments. 
	
	computeBranchSums(node.right, newRunningSum, sums);//recursively call the computeBranchSums function with the right node 
	//value, newRunninSum and sums array as arguments. 
}


