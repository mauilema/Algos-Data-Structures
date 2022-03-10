function minimumWaitingTime(queries) {
    sortArray(queries);
      let queueCount = 0;
      
      for (let i = 0; i < queries.length-1; i++) {
          let duration = queries[i];
          let queriesLeft = queries.length - (i + 1);
          queueCount += duration * queriesLeft;
      }
    return queueCount;
  }
  
const sortArray = (array) => array.sort((a,b) => a - b)

//define a helper function that will sort the array in asc order; 
//call that function with the queries array as the argument; 
//define a variable that will accumulate all the waiting times; it is originally equal to 0
//use a for loop to iterate through the mutated queries array; 
//define a variable that will store the value of the element in the queries array at the current index
//define a variable that stores the amount of elements left in the queries array depending on the 
//index being iterated. 
//add the accumulator aka queueCount to the product of the duration of the current element
//and the queries left at that moment
//return the queueCount after the for loop is done;