function longestPalindromicSubstring(string) {
    let currentLongest = [0, 1]; //declare a variable currentLongest that stores an array of 2 integers. The first integer element represents the 
      //index at which the current longest string begins. The second integer element represents the index where the current longest string ends plus
      //one. The reason why the second index is not exact is because we use the slice method later on. This method includes the first index and 
      //excludes the second index passed to it as it slices a string. 
      
      for (let i = 1; i < string.length; i++) { //use a for loop to traverse the string. We start at index 1 because the are no characters to the 
          //left of the character located on the first index of the string. We want to start searching for palindromes starting from the second
          //character in the string. At this start point, we can look to the right and to the left. This will help us located palindromes of both, even
          //and odd, lengths. 
          
          const odd = palindromeStringFrom(string, i - 1, i + 1); //declare a variable "odd" that stores the result of calling a helper function with
          //the string, current index minus 1 and current index plus one, as arguments. It will help us access characters on both sides of the current character.
          
          const even = palindromeStringFrom(string, i - 1, i); //declare a variable "even" that stores the result of calling a helper function with 
          //the string, current index minus 1 and current index, as arguments. For even length palindrome strings, we want to start by checking the 
          //current character and the character immediately to it's left. This is because even length palindrome strings may have 1 pair or more 
          //of the same letters in the middle. 
          
          const longest = odd[1] - odd [0] > even[1] - even[0] ? odd : even; //declare a variable "longest" that stores the longest odd or even 
          //palindrome string found in the previous calls to the helper function. The latter returns an array with 2 elements. The first element
          //is the index where the palindrome starts. The second element is the index where the palindrome ends. 
          //The length of both, the odd and even, palindrome strings is calculated by subtracting the first element from the second element in the arrays
          //stored in the odd and even variables. 
          
          currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest; //reassign the value of the 
          //currentLongest variable depending on which is longer. Compare the length of the currentLongest palindrome string versus the lenght of the 
          //longest palindrom string. The longest of the two will now be stored in the currentLongest variable. The calculation is done by subtracting the value
          //of the first element from the value of the second element in the pertinent array. 
      }
      return string.slice(currentLongest[0], currentLongest[1]); // be the end of the for loop, the variable currentLongest should be storing an 
      //array of the 2 indeces from the longest palindrome substring found in the origin string. The first index is where the longest palindrome
      //substring starts. The second index points at the end of the longest palindrome substring plus one. We have have one more to the value of 
      //the second index because the slice method excludes the character located on the second index passed to it. 
  }
  
  function palindromeStringFrom (string, leftIdx, rightIdx) { //this helper function takes the input string, a left index and a right index. It is 
      //important to say that we have access to the current index and use that information to access it's neighbor indeces to it's left and right. 
      
      while (leftIdx >= 0 && rightIdx < string.length) { //use a while loop to search for palindrome substrings within the bounds of the input string. 
          //The left search should go until the first index, including the character located there. The right search should go until the last character
          //in the string, including that last character. 
          
          if (string[leftIdx] !== string[rightIdx]) break; //use an if condition that checks if the character to the left of the current character is the 
          //same as the character to the right of the current character. If this condition is false, we have not found a palindrome and break out of this 
          //while loop. 
          
          // the following incrementers will occur as long as we keep finding equal characters to the left and right of the current character. 
          leftIdx --; //increase the left index by 1.
          rightIdx ++; //increase the right index by 1.
      }
      return [leftIdx + 1, rightIdx] //once the while loop is done, return the left index + 1 and the right index. The reason why we add one left index
      //is because the left index points to the character to the left of the initial character in the palindrom substring. That is because the while
      //loop stopped when the characters on the left and the right aren't equal anymore. So, both indeces are currenly pointing to the next index of
      //the starting and ending indeces of the palindrome substring. 
      
      //We dont' add 1 to the right index because we prepare for the slice method which excludes the character located on the second index passed to it. 
  }

  