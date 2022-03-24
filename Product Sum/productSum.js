function productSum(array, nestedArrayCount = 1) { //initiate a variable to keep count of nested arrays which is the multiplier; it's initial value is 1. Pass it as a parameter. 
//declare and accumulator to keep count of the total sum
    let sum = 0;
      for (const element of array) {  //use a for of loop to traverse the array; we're only interested in the values of the elements in the array, not the indeces

          if (Array.isArray(element)) {  //declare an if conditional that checks if the element being traversed is an array. We can use the Array.isArray method. 
              //If that conditional is truthy then add the sum accumulator to the result of recursively calling the productSum function. The 
              //second argument in that recursive call is the multiplier(nestedArrayCount) plus one. The reason is that we must add one to 
              //the multiplier every time we find a nested array. This will keep account of the depth factor. 
              sum += productSum(element, nestedArrayCount + 1)
          } else {
              sum += element;  //Otherwise, add the sum accumulator to the element

          }
      }
      return sum *= nestedArrayCount;  //Once the for loop has iterated through the entire array and all the recursive calls are complete, return the total sum accumulartor times
      //the multiplier(nestedArrayCount) which would be 1 for the first depth. 
  }
  
  
  
