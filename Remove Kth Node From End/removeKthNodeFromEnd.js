//Brute Force Iterative Solution. Needs to fix one edge case.

// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeKthNodeFromEnd(head, k) {
    let current = head;
      let current2 = head;
      // let valueTrackArray = [];
      let nodeCount = 0;
      while (current !== null) {
          // valueTrackArray.push(current.value);
          nodeCount ++;
          current = current.next; 
      }
      // console.log(valueTrackArray);
      // console.log(nodeCount-k);
      while (current2 !== null) {
          // if ((nodeCount - k) === 0) {
          // 	return current2.next;
          // }
          
          if (current2.value === nodeCount - k - 1) {
              // console.log(current2.value)
              let eliminatedNode = current2.next;
              let newFriend = eliminatedNode.next;
              current2.next = newFriend;
          }
          current2 = current2.next;
      }
  }
  
  // Do not edit the lines below.
  exports.LinkedList = LinkedList;
  exports.removeKthNodeFromEnd = removeKthNodeFromEnd;
  