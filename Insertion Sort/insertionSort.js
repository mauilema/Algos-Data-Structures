function insertionSort(array) {
    for (let i = 1; i < array.length; i++) { //iterate through the array elements, start at the second element
          //(index 0) as the first element is tentatively in order.
          let j = i; //assign the value of i to j. This is done so that the current element in the iteration can be
          //compared to the element right before it. 
          while (j > 0 && array[j] < array[j - 1]) { //this while loop starts at j>0 because we dont need to check 
              //the elements before the first element(index of -1). We do need to compare the values of all the elements
              //after j >= 1 until the end of the array. If the current element is greater than the element right before it, 
              //swap them 
              swapArrEls(j, j - 1, array);//this helper function is used to swap elements in an array, check below for more details
              j -= 1;//after swaping the 2 elements in order. Subtracting 1 from j will allow the function to check any numbers
              //that are located in between the elements already sorted at the beginning of the array and the elements left 
              //to sort after that
          }
      }
      
      return array;//once all the elements are sorted; return the mutated array
  }
  
  function swapArrEls (i, j, array) {//takes 2 indeces and an array as arguments
      [array[i], array[j]] = [array[j], array[i]];//swaps the position of 2 elements based on their index
      return array;//returns a modified array
  }
  
  // Do not edit the line below.
  exports.insertionSort = insertionSort;
  