function pairWithTargetSum (array, target) {
    let results;
    let rightPointer = array.length - 1; 
  
    for (let leftPointer = 0; leftPointer < array.length; leftPointer++) {
      let leftNum = array[leftPointer]; 
      let rightNum = array[rightPointer]; 
      results = [leftPointer, rightPointer]; 
      let currentSum = leftNum + rightNum; 
  
      
  
      if (currentSum > target && leftPointer !== rightPointer) { 
        currentSum = leftNum + (array[rightPointer - 1]);
        rightPointer--; 
      } else if (currentSum < target && leftPointer !== rightPointer) {
        currentSum = rightNum + (array[leftPointer + 1])
      } else {
        return results;
      }
  
      if (leftPointer === rightPointer) return [];
    }
  
    
  }
  
  pairWithTargetSum([1, 2, 3, 4, 6], 6);

  