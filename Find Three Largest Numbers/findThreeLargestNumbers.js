function findThreeLargestNumbers(array) {
    const threeLargestNumbers = [null, null, null];//declare a variable that will store a new array of 3 elements. The value of each of those elements is initially null. 
      //Null will serve as a placeholder for now. 
      
      for (const num of array) {//use a for of loop to traverse the input array because we're only interested in the values of those elements 
          updateLargest(threeLargestNumbers, num) //call a helper function whose code is explained in the function below
      }
      return threeLargestNumbers //at this point the new array should have the 3 largest numbers (found in the input array) in ascending order
  }
  
  function updateLargest (threeLargestNumbers, num) {//this helper function takes the new array and each number from the input array as arguments
      
      //The conditionals below check if the current number in the new array is strictly equal to null or if the current number in the input array is 
      //greater than the current number in the new array. Essentially, we will be adding numbers to the new array. This depends on the current value at the 
      //new array. It could be either null or there could be a number there. It also depends on the current number in the input array. We have to traverse through all
      //the numbers in the input array. 
      //We want to have the largest numbers in ascending order. To achieve this, we will be calling another helper function explained below.
      if (threeLargestNumbers[2] === null || num > threeLargestNumbers[2]) {
          shiftAndUpdate(threeLargestNumbers, num, 2) 
      } else if (threeLargestNumbers[1] === null || num > threeLargestNumbers[1]) {
          shiftAndUpdate(threeLargestNumbers, num, 1) 
      } else if (threeLargestNumbers[0] === null || num > threeLargestNumbers[0]) {
          shiftAndUpdate(threeLargestNumbers, num, 0) 
      }
  }
  
  function shiftAndUpdate(array, num, idx) {//this helper function takes in the new array, the current number from traversing the input array, and an index
      //The point of this function is to shift numbers in the new array to the left depending on their value. Additionally we want to reassign the value of 
      //the elements in the new array depending on their value. In the end, this function will be placing the largest numbers in ascending order, making sure there
      //are only 3 numbers in the new array
      
      for (let i = 0; i<=idx; i++) { //A for loop is used to traverse the numbers from 0 up to and including the index passed as an argument.
          if (i === idx) {//if the current index is strictly equal to the input index, then the element in the new array at that current index is reassigned the value of num; which
              //is the current number from the original input array
              array[i] = num; 
          } else {
              array[i] = array[i+1] //otherwise the value of the element in the new array at the current index is reassigned the value of the element in the new array at the next 
              //index to its right
          }
      }
  }
