function removeDuplicates (array) {

    let j = 1; // declare a variable "j" that is initialized with the number 1. This variable will serve as a pointer to the number to the right of the current number we're iterating. Once the pointers, i and j cross, j 
    //will point to the number to the left of the current number we're iterating. This has to do with the fact that we're splicing the array as we find duplicates. Since i moves to the right by one. We need to keep 
    //into account the number that just got moved to the position of the number that was just taken out. 
    
    for (let i = 0; i < array.length; i++) { //use a for loop to iterate throught the entire array. The variable "i" is initialized at 0. It will be a pointer to the current number being iterated. 
      
        let currNum = array[i]; //declare a variable "currNum" that is initialized with the current number in the array at the current index i. 

        let otherNum = array[j]; //declare a variable "otherNum" that is initialized with the current number in the array at the current index j. 
  
        if (currNum === otherNum) { //use an if condition to check if the currNum is strictly equal to the number next to it. If that condition is truthy...

          array.splice(j, 1); //use the array splice method to delete the number at the j index. 

          j--;//subtract 1 from j because we just deleted the number at the current j index. It's almost as if we moved the j index to the number located on the right of the current number. Since we're incrementing j by 
          //1 in the next line of code, we want to subtract one to keep account of the new number at the current j index position. 
        }
  
        j++; //increment j by 1 to move one to the right. 
      
    }
  
    return array.length; //at this point, we should have iterated throught all the numbers in the array. We should have made the comparisons and removed any duplicates. Therefore, we return the length of our new mutated array.
}   



