function kadanesAlgorithm(array) {
    let maxEndingHere = array[0];//declare a variable maxEndingHere that stores the value of the first 
      //element in the input array. This will be our temporary max sum for the subarray.
      
      let maxSoFar = array[0];//declare a variable maxSoFar that stores the value of the the first element
      //in the input array. This variable will store the max sum possible while traversing the input array.
      
      for (let i = 1; i < array.length; i++) {//use a for loop to iterate through the input array starting 
          //at the second element. We already have access to the first element with the 2 variables declared
          //above.
          
          let num = array[i];//declare a variable num that stores the value of the current element being 
                                               //iterated. 
          
          maxEndingHere = Math.max(num, maxEndingHere + num);//this formula helps us to choose the max sum
          //between the subarray and the current num. It helps us to eliminate subarrays that may have large
          //negative numbers. 
          
          maxSoFar = Math.max(maxSoFar, maxEndingHere);//maxSoFar will store the max sum throughout the iteration
          //of the input array. 
      }
      return maxSoFar; //Once the for loop ends, maxSoFar should store the max sum possible using numbers in the subarray.
  }