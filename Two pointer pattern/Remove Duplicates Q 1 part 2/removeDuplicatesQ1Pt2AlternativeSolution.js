function removeRuplicatesV2(array, k) { //this function takes 2 arguments. An unsorted array and a number k.

    let j = 0; //declare a variable j that is initialized with the value of 0. This variable will serve as a pointer to the next non k number found. 

    for (let i = 0; i < array.length; i++) { //use a for loop to iterate through the array. The variable "i" is initialized with the number 0. This variable will serve as a pointer that moves and visits all
        //the numbers in the array, one by one, from left to right. 
  
      if (array[i] !== k) { //use an if condition to check if the current number at index i is not equal to k. Our goal here is to find a number that is not k. If this condition is truthy...

        array[j] = array[i]; //reassign the value of the array at index j to the value of the array at index i. Since j points to the non k number, we want it to have the proper value. That would be the 
        //value we just found at index i. 

        j++; // now that j has the proper value for the non k number, we want to move it one position to the right. The number at index j is temporarily pointing to the non k number we just. We're waiting until 
        //we find a new non k number to replace the number currently found at the new j position.

      }
      
    }
  
    return j; //at this point we should have traversed the entire array and moved all the non k numbers to the left. j would have kept account of the amount of non k numbers. That is because j is only incremented
    //when we find a non k number. Therefore, we just return j. 

  }

