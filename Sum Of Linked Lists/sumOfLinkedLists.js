class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
	
	let dummyNode = new LinkedList(0); //declare a variable dummyNode that stores a new node with the value of 0. This will be a dummy node used as reference to create our new linked list and return the correct values
	//in our new linked list. 
	
	let currentNode = dummyNode; // declare a variable that servers as a pointer for the node we are currently visiting in our loop. 
	
	let nodeOne = linkedListOne; // declare a varible that stores the first linked list. This object will starts at the head node, has properties value and next, and has nested nodes that come after it. 
	let nodeTwo = linkedListTwo; // declare a varible that stores the second linked list. This object will starts at the head node, has properties value and next, and has nested nodes that come after it. 
	let carryOver = 0; //declare a variable that stores the number we carry over after our fist addition. Just like elementary school, we will be carrying a number over to the next place in the addends. 
	
	while (nodeOne !== null || nodeTwo !== null || carryOver !== 0) { //use a while loop to iterate throught both linked lists as well as to keep adding new nodes to our new linked list. This loop will run while
		//the first node exists or the second node exists or carry over is not zero. There could be a situation where both linked lists have one node. After adding both nodes, it's possible that the sum would be 
		//greater than 10. This means we must carry over and continue to add a new node in our new linked list. Therefore, we must continue if carry !== 0
		
		let valueOne = nodeOne !== null ? nodeOne.value : 0; //declare a variable that we will use as our first value to add with the other linked list's first value. We can use the first linked list's node value as
		//long as it's not null. If the latter is the case, then we will use 0 as a place holder. This helps to solve the problem of having 2 input linked lists of unequal lenght. We must continue adding the longer
		//linked lists nodes in order to return a proper new linked list with the right amount of nodes. Therefore, the 0 placeholder will allow us to continue iterating the remaining longer linked list. 
		
		let valueTwo = nodeTwo !== null ? nodeTwo.value : 0; //declare a variable that we will use as our first value to add with the other linked list's first value. If the node's value is null, then use 0 as a placeholder. 
		
		let sumOfValues = valueOne + valueTwo + carryOver; //declare a variable that stores the sum of the node values from both linked lists in matching positions. That means add the first node from NodeOne plus the 
		//first node from NodeTwo. If there is no node at a certain position, we should have already replaced that value with a 0 placeholder. The 3rd addened in this sum is the carry over. Just like elementary math,
		//a carry over value should be added to the sum of the current addends. 
		
		let remainder = sumOfValues % 10; //declare a variable that simulates elementary math in the value that stays in the sum. It is the new value from sumOfValues. We use the module operator to check what remains
		//when our current sum value is divided by 10. That remainder number is the one we actually write down in that position for our sum. In our case, that remainder number will be inserted into our new linked list. 
		
		let newNode = new LinkedList(remainder); //use the new keyword to create a new node with the LinkedList class defined above. 
		
		currentNode.next = newNode; //the current node, starting with the dummy node, will now have a next property pointing towards the newNode we just created in the line above. 

		currentNode = newNode; //currentNode, as mentioned before, is used as an pointer to the current node in the loop. Since we're done with the dummy node, we now move into the next node. The latter is the newNode
		// we just created above. 
		
		carryOver = Math.floor(sumOfValues / 10); //carry over is the number we want to bring to the next addition of addends. In this case we want the floor value of dividing sumOfValues by 10. 
		
		nodeOne = nodeOne !== null ? nodeOne.next : null; //this will help us move to the next node in the first linked list. If checks if it is not null, then it uses the next value of the current nodeOne. Otherwise,
		//it sets it as null. The problem that nodeNode === null is addressed in the first 2 lines of this while loop; where we assign 0's as placeholders. 
		
		nodeTwo = nodeTwo !== null ? nodeTwo.next : null;//this will help us move to the next node in the second linked list. If checks if it is not null, then it uses the next value of the current nodeTwo. Otherwise,
		//it sets it as null. The problem that nodeTwo === null is addressed in the first 2 lines of this while loop; where we assign 0's as placeholders. 
 		
		
	}
		
	return dummyNode.next; //once the while loop is complete, we should have a new linked list whose head node is our dummy node. Since we dont need our to return our dummy node, we return it's next node. The latter
	//would be our new head that meets our criteria. 
	

}

