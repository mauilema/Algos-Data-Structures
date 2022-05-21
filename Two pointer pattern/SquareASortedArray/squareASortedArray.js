function squareSortedArray (array) {
    let newArray = new Array(array.length).fill(0)
    let currentNewArrayPosition = array.length - 1;
    let rightPointer = array.length - 1;
    let leftPointer = 0;
  
    while (leftPointer <= rightPointer) {
      let squaredRight = array[rightPointer] * array[rightPointer];
      let squaredLeft = array[leftPointer] * array[leftPointer];
  
      if (squaredLeft > squaredRight) {
        newArray[currentNewArrayPosition] = squaredLeft;
        leftPointer++;
      } else {
        newArray[currentNewArrayPosition] = squaredRight;
        rightPointer--;
      }
  
      currentNewArrayPosition--;
    }
  
    return newArray;
  }

  