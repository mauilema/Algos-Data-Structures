function firstNonRepeatingCharacter(string) {
    // Write your code here.
      //the first for loop iterates through every character with the string length
      for (let i = 0 ; i < string.length; i++) {
          let duplicateFound = false // this boolean will change to true if duplicate characters are found
          for (let j = 0; j < string.length; j++) { // this first loop compares the each individual character
              //to all characters in the string; starting from the first character
              if (string[i] === string[j] && i !== j) duplicateFound = true //change duplicate found to true if
              // the individual character is strictly equal to the character from the rest of the characters AND 
              // index i doesn't equal index j. Duplicate characters in the same index are always the same. 
          }
          if (!duplicateFound) return i // if !duplicateFound is truthy, meaning duplicateFound = false; then 
          // return the index. At this point an individual character has been compared to all the characters 
          //and it is unique. The first instance of duplicateFound = false should end this function
      }
    return -1; //if duplicateFound = true, meaning no unique characters were found. Then return -1. 
  }