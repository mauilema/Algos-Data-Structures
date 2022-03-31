function smallestDifference(arrayOne, arrayTwo) {
    let smallestDiff = -1;  //declare a variable smallestDiff that will store a temporary smallest difference. We 
    //don't use the number 0 because the a smallest difference of 0 is a possible edge case

      let resultsArray = [];//declare a variable resultsArray that stores the final results array with the 2 numbers
      //,one from each input array; with the smallest possible difference

      for (let i = 0; i < arrayOne.length; i++){ //loop through the entire first input array 
          let elArrayOne = arrayOne[i]; //declare a variable elArrayOne that stores the value of i at the current iteration
          
          for (let j = 0; j < arrayTwo.length; j++) {//loop through the entire second input array
              let elArrayTwo = arrayTwo[j];//declare a variable elArrayOne that stores the value of j at the current iteration 
              let absValue = Math.abs(elArrayOne - elArrayTwo);//declare a variable absValue that stores the absolute value between 
              //2 numbers despite their location in the number line (either positive or negative). This value is achieved by using
              //the Math.abs method. 

              if (smallestDiff === -1 || absValue < smallestDiff) { //declare a conditional that checks if the current smallest
                //difference is -1 (meaning this is the first time the smallest difference is checked) OR if the absolute value 
                //between 2 numbers is less than the smallest difference. If the latter is truthy, it means we found a new
                //smallest difference. 

                  smallestDiff = absValue;//reassign the value of smallestDiff to the new smallest difference which is the value
                  //stored in absValue
                  resultsArray[0] = elArrayOne; //use bracket notation to set the value of the first element of the results array 
                  //to the value of i at the current iteration
                  resultsArray[1] = elArrayTwo; //use bracket notation to set the value of the second element of the results array 
                  //to the value of j at the current iteration
                  
              }
          }
      }
      
      return resultsArray; //once both for loops are completed, the results array should have the numbers, one from each input array, 
      //whose difference is the smallest
  }

