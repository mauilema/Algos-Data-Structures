function removeDuplicates (array) { //this function takes a sorted array as it's argument.

    let i = 1; //declare a variable "i" that is initialized with the number 1. This will serve as a pointer to every number in the array, except the first number. We will access the first number by using 
    //the other pointer as reference. 

    let j = 1; //declare a variable "j" that is initialized with the number 1. This will server as a pointer to the next non duplicate number found by iterating the array.
    
    while (i < array.length) { //use a while loop to iterate through all the elements in the array.
        
       //The if condition below is falsy when we find duplicates. Therefore pointer j will not move and it's value will not be reassigned. Our goal is to move all the non duplicate numbers to the left side 
       //of the array. The final value of index j is also the amount of non duplicate numbers we found in the array. That is because we increase j everytime we find a non duplicate number. 
       
      if (array[j - 1] !== array[i]) { //use an if condition to check if the number at pointer j - 1 (used to access the first element) is not equal to the number at pointer i. It that is truthy...

        array[j] = array[i]; //reassign the value of the number at pointer j to the number at pointer i. Since index j will point to the next non duplicate number, we want to change it's original
        //value to the non duplicate number we just found at pointer i. 

        j++; //since index j now points to a new non duplicate number. We want to move it to the right in order to search for the next non duplicate number. Index j will now temporarily point to a duplicate 
        //number until we find the next non duplicate number by iterating index i.
      }
      
      i++; //we increment index i by 1 to make sure we reach the terminating condition in the while loop. Also we want index i to point to every element in the array from left to right. 
    }
  
    return j; //at this point, we should have iterated through the entire array. All non duplicate numbers should have been moved in place to the left side of the array. The value of index j should be 
    //storing the amount of non duplicate numbers we found. Therefore, we just return it. 
  }