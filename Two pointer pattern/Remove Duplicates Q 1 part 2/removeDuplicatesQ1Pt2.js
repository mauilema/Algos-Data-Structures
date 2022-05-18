function removeKFromArray (array, k) { // this function takes an unsorted array and a number k as arguments. 
  
    let i = 1; // declare a variable "i" that is initialized with 1. This will serve as a pointer to the current number in the array. We will visit every number one by one. We start at 
    //index 1 because the other pointer starts at 0. 

    let j = 0; // declare a variable "j" that is initialized with 0. This will serve as a pointer to the number that is equal to k. 
  
    while (i < array.length) { //use a while loop to iterate through all the elements in the array; except the first element which is taken care of by the pointer at index j. 

      if (array[j] === k && array[i] !== k) { //use an if condition to check 1. if the number at index j is strictly equal to k and 2. if the number at index i is not equal to k.
        //if that condition is truthy...

        [array[j], array[i]] = [array[i], array[j]] //Use ES6 syntax to swap the elements in place. This method will help us place all repeating k's at the end of the array. 

        j++ //add 1 to j since we found a number that doesn't equal k. We now want the pointer at index j to move one to the right since it will need to be pointing to a number 
        //that is equal to k. 

      }
  
      i++ // increment i by 1 to move its position to the right by 1. i will now point to the next number in the array and j will point to a k in the position of the last non k number. 
    }

    return j; //at this point we should have looped through the entire array, swapping values based on our logic, moved all the repeating k's to the end of the array, and kept account of 
    //the value of j. Therefore, we just return j which represents the amount of non k numbers. 

  }


