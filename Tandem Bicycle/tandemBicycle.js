function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    let totalSpeedCount = 0;
      sortArray(redShirtSpeeds);
      sortArray(blueShirtSpeeds)
      if (fastest === true) {
          while (redShirtSpeeds.length > 0 && blueShirtSpeeds.length > 0) {
              if (redShirtSpeeds[0] > blueShirtSpeeds[0]) {
                  let tandemSpeedRedBlue = Math.max(redShirtSpeeds[0], blueShirtSpeeds[blueShirtSpeeds.length-1]);
                  totalSpeedCount+=tandemSpeedRedBlue;
                  redShirtSpeeds.shift();
                  blueShirtSpeeds.pop();
              } else {
                  let tandemSpeedBlueRed = Math.max(blueShirtSpeeds[0], redShirtSpeeds[redShirtSpeeds.length-1]);
                  totalSpeedCount+=tandemSpeedBlueRed;
                  blueShirtSpeeds.shift();
                  redShirtSpeeds.pop();
              }
          }
          return totalSpeedCount;
      } else if (fastest === false) {
          while (redShirtSpeeds.length > 0 && blueShirtSpeeds.length > 0) {
              let tandemSpeedofMaxRedAndBlue = Math.max(redShirtSpeeds[0], blueShirtSpeeds[0]);
              totalSpeedCount+=tandemSpeedofMaxRedAndBlue;
              redShirtSpeeds.shift();
              blueShirtSpeeds.shift();
          }
          return totalSpeedCount;
      }
    
  }
  
  
  const sortArray = (array) => array.sort((a,b) => b-a)
  
  
  //Pseudo Code 
  //define an accumulator variable (totalSpeedCount) for total speed. Set it equal to 0;
  //if fastest = true; pair the largest element in one array with smallest element in the other array
  //sort both arrays In desc order; use helper function named "sortArray"
  //[9,5,5,3,2]
  //[7,6,3,2,1]
  //initiate a while loop which runs its code block if array1 length and array2 length > 0
  //if the first element in array1 is greater than the first element in array2; then find the max of 
  //the first element in array1 and the last element in array2. Add that max number to totalSpeedCount
  //After that, shift the first element in array1. And pop the last element in array2;
  
  //if fastest = false; pair the largest element in array1 with the largest element in array2
  //sort both arrays In desc order
  //[9,5,5,3,2]
  //[7,6,3,2,1]
  //initiate a while loop which runs its code block if array1 length and array2 length > 0
  //Find the max of the first element in array1 and the first element in array2. Add that max number to totalSpeedCount
  //After that, shift the first element in array1. And shift the first element in array2;
  
  