function phoneNumberMnemonics(phoneNumber) {
    const currentMnemonic = new Array(phoneNumber.length).fill('0'); //declare a const variable currentMnemonic that stores a new array with 
      //the same length as the input string phoneNumber. Fill all elements in this new array with the string '0'. Those will serve as placeholders
      //for now. 
      
      const mnemonicsFound = []; //declare a const variable mnemonicsFound that stores an empty array. This array will store all the mnemonics
      //found in the input string phoneNumber. 
      
      phoneNumberMnemonicsHelper(0, phoneNumber, currentMnemonic, mnemonicsFound); //call a helper function defined below. Pass the first index, 0, 
      // the phoneNumber, currentMnemonic and mnemonicsFound as arguments. 
      
    return mnemonicsFound; //return mnemonicsFound which should have all the mnemonics found in the input string. 
  }
  
  function phoneNumberMnemonicsHelper (index, phoneNumber, currentMnemonic, mnemonicsFound) {//this function takes an index, phoneNumber string, 
      //currentMnemonic array, and mnemonic array as arguments. 
      
      if (index === phoneNumber.length) {//declare a conditional that checks if index is strictly equal to the phoneNumber string length. This is our
          //base case. If truthy, join the elements in the currentMnemonic array and push it into the mnemonicsFound array. 
          mnemonicsFound.push(currentMnemonic.join(''))
      } else { //otherwise run the code below.
          
          let digit = phoneNumber[index]; //declare a variable digit that holds the single phone number at the current index. 
          
          let letters = DIGITS_LETTERS_DICTIONARY[digit]; //declare a variable "letters" that stores the array of letters found in the object containing all 
          //the phone numbers as keys and a list of letters associated with them as values. This line of code uses bracket access with the digit
          //variable which is the current single phone number. 
          
          for (const letter of letters) { //use a for of loop to iterate through the letters array. 
              
              currentMnemonic[index] = letter; //use bracket access to reassign the value of the current index with the current letter in the iteration
              
              phoneNumberMnemonicsHelper(index + 1, phoneNumber, currentMnemonic, mnemonicsFound) //make a recursive call with the next index to the 
              //right of the current index. There will be a couple of recursive calls in the stack depending on the length of the input string and the 
              //amount of letters associated with each number. This recursive call will help us iterate through all the letters associated with each number.
              //Those letters will be populated into the currentMnemonic array from right to left. It will cover all possible mnemonics associated with 
              //the input string. 
          }
      }
  }
  
  
  const DIGITS_LETTERS_DICTIONARY = { //use an object to store all the phone numbers as keys and a list of associated letters as values. 
      0: ['0'],
      1: ['1'],
      2: ['a', 'b', 'c'],
      3: ['d', 'e', 'f'],
      4: ['g', 'h', 'i'],
      5: ['j', 'k', 'l'],
      6: ['m', 'n', 'o'],
      7: ['p', 'q', 'r', 's'],
      8: ['t', 'u', 'v'],
      9: ['w', 'x', 'y', 'z']
  }


  