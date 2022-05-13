function pairWithTargetSum (array, target) {
    let results;
    let rightPointer = array.length - 1; 
  
    for (let leftPointer = 0; leftPointer < array.length; leftPointer++) {
      let leftNum = array[leftPointer]; //1
      let rightNum = array[rightPointer]; //6
      results = [leftPointer, rightPointer]; //[0, 4]
      let currentSum = leftNum + rightNum; //7
  
      
  
      if (currentSum > target && leftPointer !== rightPointer) { //7 > 6 ?
        currentSum = leftNum + (array[rightPointer - 1]);
        rightPointer--; //5
      } else if (currentSum < target && leftPointer !== rightPointer) {
        currentSum = rightNum + (array[leftPointer + 1])
      } else {
        return results;
      }
  
      if (leftPointer === rightPointer) return [];
    }
  
    
  }
  
  pairWithTargetSum([1, 2, 3, 4, 6], 6);

  