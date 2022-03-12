function selectionSort(array) {
    let startingIdx = 0; //start analazing the array at the first element which is in index 0;
      while (startingIdx < array.length - 1) { //run the below block of code for all the indices except the
          //last index; at that point, the array should be sorted
      let smallestIdx = startingIdx; //temporarily assign the value of the starting index to the smallest index. This
          // is because both starting index and smallest index will change depending on element values. At first,
          //we want to assume the element in the first index is the smallest in value; once we compare it to the 
          //the other elements in the array, we want to change the smallest index to match the smallest number
          for (let i = startingIdx + 1; i < array.length; i++) {//iterate through all the elements in the array; starting
              //at the element one position to the right of the startingIdx (startingIdx + 1)
              if (array[smallestIdx] > array[i]) smallestIdx = i;//check if the value of the elment in the smallest idx 
              //is greater than the value of the element in the current index. If yes, then the smallest index is now equal to
              //the current index. We keep iterating until we have a final value for the smallest index which holds the 
              //element with the smallest value
          }
          //at this point we have the element and index for the smallest number. So we want to swap that element
          //with the element in the starting index. Since we start at 0, the smallest number found would be swapped
          //with the element at index 0 assuming array[smallestIdx] > array[startingIdx]
          swapArrEl(smallestIdx, startingIdx, array)//call the helper function, check below for further details
          startingIdx += 1;//we want to add one to the starting index every time the for loop has finished iterating.
          //this is because we want to continue checking for the smallest number in the array indices until we reach
          //that last index. At this point the first index should be sorted, so we dont want to touch it. We do 
          //want to check the rest of the array
      }
      return array; //once all iterations have been completed. Numbers in the array have been sorted in ascending order, 
      //then we return the sorted array
  }
  
  
  function swapArrEl (i, j, array) {//takes 2 indices and an array as parameters
      [array[i],array[j]] = [array[j], array[i]] //uses new ES6 syntax to swap the position of 2 array 
      //elements using their indices.
  } 
