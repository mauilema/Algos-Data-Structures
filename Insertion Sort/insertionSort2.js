function insertionSort(array) {
    for (let i = 0; i < array.length; i++) { //use a for loop to traverse the array, starting from the element at index 0. 
          
          let minIdx = i;//declare a variable minIdx which references the index(i) at which we are currently iterating. The value of variable i will change as we iterate through this loop (using i++).
          //minIdx will eventually be used to compare a number to it's neighbor to the right. 
          
          let temp = array[i]; //declare a variable temp which stores the value of the array at the current index. temp will eventually be used to swap elements in place. 
          
          for (let j = i + 1; j < array.length; j++){ //use a second for loop to compare a number to it's neighbor to the right. j starts at i + 1 because we already have access to the first element
              //using the index i. Our mission is to compare all the numbers in the array in pairs from left to right. We are searching for the index of the smalles number that we find.  
              
              if (array[j] < array[minIdx]) {//use an if condition to check if the the current number at i is less than it's neighbor to the right, which is the current number at j. array[minIdx] here is 
                  //important because it will reference to the smallest number we have found so far. 
                  
                  minIdx = j; //reassign the value of minIdx to j once we find a smaller number than what we have so far. minIdx is now the index of the smallest number we found so far. 
              }
              //By the end of the first complete iteration of this for loop, minIdx should be the index of the smallest number in the array. We will use that info to swap the first element with the smallest
              //number we have found. 
          }
          array[i] = array[minIdx]; //at this point we are still at the first iteration of the first for loop; meaning i = 0. Therefore we access the array at i to get the first element. We reassing the 
          //value of the first element to now be the value of the array at minIdx; which is the index pointing to the smallest number we found.
          
          array[minIdx] = temp;//the new value for the array at minIdx, which use to store the smallest number, is now array[i] aka temp. In other words, the space previously taken by the smallest 
          //number in the array is now taken by the first element in the array. 
      }
      return array; //by the end of both for loops. We should have found all the smallest numbers and swapped them to the beginning of the array one by one. Both, the first and second loops
      //have an iterator of ++. This allows us to swap numbers in the array from left to right, one by one. The smallest number will take the position of the first element. The next smallest 
      //number will take the position of the second element and so on and so forth. Elements will only be swapped if we found a smaller number (at every full iteration of the second loop) than 
      //the current number in the first loop iteration. 
  }