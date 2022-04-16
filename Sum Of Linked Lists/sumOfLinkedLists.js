class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function sumOfLinkedLists(linkedListOne, linkedListTwo) {
      
      let dummyNode = new LinkedList(0);
      let currentNode = dummyNode;
      
      let carryOver = 0;
      let nodeOne = linkedListOne;
      let nodeTwo = linkedListTwo;
      
      while (nodeOne !== null || nodeTwo !== null || carryOver !== 0) {
          let valueOne = nodeOne !== null ? nodeOne.value : 0;
          let valueTwo = nodeTwo !== null ? nodeTwo.value : 0;
          
          let sumOfValues = valueOne + valueTwo + carryOver;
          
          let newValue = sumOfValues % 10;
          let newNode = new LinkedList(newValue);
          currentNode.next = newNode;
          currentNode = newNode;
          
          carryOver = Math.floor(sumOfValues / 10);
          
          nodeOne = nodeOne !== null ? nodeOne.next : null;
          nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
      }
       return dummyNode.next;
      }
      
