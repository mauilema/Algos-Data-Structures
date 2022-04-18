class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function reverseLinkedList(head) {
      let current = head; //declare a variable that stores the current node. We begin with the head node. 
      
    let prev = null; //declare a variable that stores a null value. We want our current head to become the new tail. As a tail, it has to point to null. Therefore we need a pointer to a null value. 
      
      let temp; //initialize a variable "temp". Further info below...
      
      while (current !== null) { //use a while loop to traverse the linked list. It will stop at the node right after the leaf as it is null. 
          
          temp = current.next; //declare the value of temp as the node right next to the current node. Temp will be a pointer of reference to the current's next node to the right. 
          
          current.next = prev; //the current node now needs to point elsewhere. At first, the current node will point at null since it is the new tail. Later on, the current node will point to a new node, the one
          //next to it on the left. 
          
          prev = current; //reassign the value of prev to the current node. Prev will serve as a pointer to the prev node of the current node. 
          
          current = temp; //reassign the value of the current node to temp aka the next node. This is done to move on to the next node in the loop. We start with the head node and move right using the next property. 
      }
      
      return prev; //at the last iteration prev should be storing the last node in the original linked list. Since all nodes have been reversed, we want to return what is now the new head node. 
  }

  
  