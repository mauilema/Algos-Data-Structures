function pairWithTargetSum (array, target) {
    let results; //declare a variable "results" that doesn't store a value. It will have a value later on.

    let leftPointer = 0; //Left pointer is a variable that is initialized with the value of 0. It will serve as the index of our left pointer. 

    let rightPointer = array.length - 1; //declare a variable "rightPointer" that is initialized with the index of the last element in the array. This will serve as the index of the right pointer. 
  
    while (leftPointer < array.length) { //use a while loop to traverse the array. The terminating condition would be the last element in the array. 

      let leftNum = array[leftPointer]; //declare a variable "leftNum" that is initialized with the value of the element at the current left pointer index. 

      let rightNum = array[rightPointer]; //declare a variable "rightNum" that is initialized with the value of the element at the current right pointer index. 

      results = [leftPointer, rightPointer]; // assign the value of an array with 2 elements. The first element is the leftPointer variable and the second element is the rightPointer variable. These variables will store different
      //values depending where our pointers are located. 

      let currentSum = leftNum + rightNum; //declare a variable "currentSum" that is initialized with the sum of the current leftNum and the current rightNum. 
  
      
  
      if (currentSum > target && leftPointer !== rightPointer) { //use an if condition that checks if 1. the currentSum is greater than target sum. This means that we will need to move the right pointer one to the left. And 2. if 
        //leftPointer doesn't equal rightPointer. This means that there is no pair sum that equals the target sum since both of our indeces are pointing to the same number. 

        rightPointer--; //subtract 1 from the rightPointer to move it to the left. 

      } else if (currentSum < target && leftPointer !== rightPointer) { //use another if condition that checks if 1. the currentSum is less than target sum. This means that we will need to move the left pointer one to the right. And 2. if 
        //leftPointer doesn't equal rightPointer. This means that there is no pair sum that equals the target sum since both of our indeces are pointing to the same number. 

        leftPointer++;

      } else {

        return results; //if the currentSum is strictly equal to the target sum, then return the results array as it will have the indeces of the pair we're looking for. 

      }
  
      if (leftPointer === rightPointer) return []; // if the leftPointer strictly equals the rightPointer, there is no pair sum that equals the target sum since both of our indeces are pointing to the same number. 
      //Therefore, we just return an empty array indicating that we didn't find a pair of numbers whose sum equals the target sum. 

    }
  
    
  }
  
  

  