function reverseWordsInString(string) {
    let words = []; //declare a variable "words" that stores an empty array. Eventually this array will store each individual word and space found in the input string.
      
      let startOfWord = 0; //declare a variable "startOfWord" that stores the integer 0. This will serve as a pointer to the first letter in each word. At times, this 
      //pointer will point to an empty space. We will write a condition that will take those empty spaces into account. 
      
      for (let i = 0; i < string.length; i++) { //use a for loop to iterate through every character in the input string. 
          
          let char = string[i]; //declare a variable "char" that stores the value of each charater at the current index. 
          
          if (char === " ") { // use an if condition to activate as soon as we encounter an empty space. At this point we want to take a record of the word that appears
              //before that space. 
              
              words.push(string.slice(startOfWord, i)); //once we find a space, slice the string beggining at the startOfWord pointer(inclusive) and ending at the current index(exclusive). 
              startOfWord = i; //reassign the value of the startOfWord pointer to be the current index. The startOfWord pointer is now pointing to an empty space. We will take care of this
              //situation with the next condition. 
              
          } else if (string[startOfWord] === " ") { //use an else if conditional to handle the empty spaces in between words. At this point, the character at the startOfWord index should
              //be pointing to an empty space. If this condition is truthy, then run the code below...
              
              words.push(string[startOfWord]); //push the char (empty space) into the words array. This will helps us to account for empty spaces.
              
              startOfWord = i; //since we took care of that empty space, reassing the startOfWord pointer to the current index. We want startOfWord to now point to the next word in the input string.
  
          }
      }
          words.push(string.slice(startOfWord)); //since there usually no space after the last word in the input string, we want to slice the string starting from the index of the last word (last value
      //of startOfWord), up to the end of the input string. Once we slice that last word from the input string, we want to push it into the words array. 
      
          reverseList(words); // call a helper funciton define below. Pass the words array as it's argument. At this point, the words array should include all the words and
      //empty spaces as individual elements. 
      
    return words.join(""); //at this point, the words array stores all the words and empty spaces individually and in the corrent reverse order. Therefore all we need to
      //do is join all elements in the array. This will create the reversed string we were looking for. 
  }
  
  function reverseList (array) { //this helper function takes in an array as it's argument. In our case, this would be our completed words array.
      let start = 0; //declare a variable "start" that initially stores the integer 0. This will be used as a pointer to the word on the left side of the array 
      //that we want to swap with the word at the righ side of the array. 
      
      let end = array.length - 1; //declare a variable "end" that stores the last character in the array. This character is going to be swapped with the first character 
      //in the array. 
      
      while (start < end) { //use a while loop that runs as long as start is less than end. We will be incrementing and decrementing both sides until they're equal at which
          //point the while loop will end.
          
          [array[start], array[end]] = [array[end], array[start]]; //use ES6 syntax to swap the first element in the array (when start is index 0) with the last element in the
          //array (when end is array.length - 1)
          
          //once the first element is swapped with the last element, we want to increment start (move it one to the right) and decrement end (move in one to the left). This
          //will help us swap the next pair of characters as we move into the center of the array. This will continue until we hit the center, that is start === end. 
          start ++; 
          end --;
      }
  }
  

  