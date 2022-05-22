function squareSortedArray (array) { //this function takes a sorted array as an argument.
    let newArray = new Array(array.length).fill(0); // declare a variable "newArray" that is initialized with a new array with the same length as the input array. Also, use the fill method to fill the posititions in 
    //this new array with 0 as placeholders. We will use a reference to these 0's to start filling the new array with the proper squared numbers. 

    let currentNewArrayPosition = array.length - 1; //declare a variable "currentNewArrayPosition" that is initialized with a reference to the last index in the input array. This index will decrease as we fill
    //the new array with squared numbers from right to left. 

    let rightPointer = array.length - 1; //declare a variable "rightPointer" that is initialized with the index of the last element in the input array. This will serve as our right pointer which will move left 
    //depending on the higher squared number. 

    let leftPointer = 0; //declare a variable "leftPointer" that is initialized with the number 0. This will serve as a pointer to the first element in the input array. It will move right depending on the higher
    //squared number at each pointer. 
  
    while (leftPointer <= rightPointer) { //use a while loop that runs while the left pointer is less than or equal to the right pointer. We want to compare squared numbers at both pointers. The pointers will
      //get closer to each other until they point to the same number. After this moment, the pointers will cross and we stop because we would be revisiting numbers without need. 

      let squaredRight = array[rightPointer] * array[rightPointer]; //declare a variable "squaredRight" which is initialized with the square of the number located at the current right pointer. 

      let squaredLeft = array[leftPointer] * array[leftPointer]; //declare a variable "squaredLeft" which is initialized with the square of the number located at the current left pointer.
  
      if (squaredLeft > squaredRight) { //use an if condition to check if the squaredLeft number is greater than the squaredRight number. The larger of the two will be positioned at the next position of the new array
        //that needs to be filled. 

        newArray[currentNewArrayPosition] = squaredLeft; //use bracket access to assign the value of the new array position that is next to be filled. It's new value would be the squaredLeft number. 

        leftPointer++; //once we have added (to the new array) the squared version of the number located at the current leftPointer, we move it's position on to the right to analyze the next number. 

      } else { //this code block runs if squaredRight is greater than squaredLeft. It also runs if squaredRight is equal to squaredLeft. In both cases we want to add this squared number to the next available position
        //in the new array. 

        newArray[currentNewArrayPosition] = squaredRight; //use bracket access to assign the value of the new array position that is next to be filled. It's new value would be the squaredRight number. 

        rightPointer--; //once we have added (to the new array) the squared version of the number located at the current rightPointer, we move it's position on to the left to analyze the next number. 

      }
  
      currentNewArrayPosition--; //once the larger squared number (between squaredLeft and squaredRight) is placed in the new array, we can move the "currentNewArrayPosition" to the left. Remember, we are filling
      //the new array with squared numbers from right to left. We want the larger numbers on the right side and the smaller number on the left side, so that it's sorted. 

    }
  
    return newArray; //at this point, we should have traversed the entire input array, squared each number and placed it in a sorted order inside the new array. Therefore, we return the new array. 
  }

  