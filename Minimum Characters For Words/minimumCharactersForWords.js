function minimumCharactersForWords(words) {
    const maxFrequencyTable = {}; //declare a variable "maxFrequencyTable" that stores an empty object. Eventually this object will be used as a hash map to store all unique characters each individual word and the max
      //amount of frequencies that will be needed to form all the words in the input words array. 
      
      for (let word of words) { //use a for of loop to traverse the words array and access each word individually. 
          
          let charactersInWordCount = countCharactersInWord(word); //declare a variable charactersInWordCount that stores the result of calling the helper function countCharactersInWord with each word as it's argument. The 
          //helper function will return an object with a count of all the unique characters found in each word, one by one. 
          
          updateMaxFrequencies(charactersInWordCount, maxFrequencyTable); //call another helper function updateMaxFrequencies that takes the charactersInWordsCount hash table and the maxFrequencyTable hash table as arguments.
          //This helper function will update the max amount of characters needed to form every word in the original words array. This max amount (frequency) will be gathered from every charactersInWordsCount table created from
          //every individual word. 
      }
      
    return resultArrayFromMaxFrequencyTable(maxFrequencyTable); //return the result of calling the resultArrayFromMaxFrequencyTable helper function by passing the maxFrequencyTable hash table as it's argument. The helper 
      //function converts the maxFrequencyTable object into an array that lists all characters one by one depending on their pertinent values found in the maxFrequencyTable. 
  }
  
  function countCharactersInWord (string) { //this is the first helper function which creates a hash table of unique characters and their frequencies per Word. It takes a string, which in our case is each word, as it's argument. 
      
      let characterCountTable = {}; //declare a variable characterCountTable that originally stores an empty object. It will be used as a hash table for unique characters and their frequencies. 
      
      for (let char of string) { //use a for of loop to iterate through each character in the input string.
          
          if (!characterCountTable[char]) characterCountTable[char] = 0; //use an if condition to check if a key value pair doesn't exit in the hash table. If truthy, then create a new object property with the current character
          //as key and 0 as it's value. 
          
          characterCountTable[char]++; //if a key value pair exists in our hash table, add 1 to it's value to account for it's frequency. 
      }
      return characterCountTable; //by the end of the for of loop, we should have traversed all the input string. We should have added all the unique characters as keys and their frenquencies as values. Therefore, we just return
      //our new hasgh table. 
  }
  
  function updateMaxFrequencies (characterFrequenciesTable, maxFrequencyTable) { //this is the second helper function. It's job is to iterate through our characterCountTable and update the max frequency found in our 
      //maxFrequencyTable. That is why it takes both of those hash tables as arguments. 
      
      for (const character in characterFrequenciesTable) { //use a for in loop to access each character in the characterFrequenciesTable. 
          
          let frecuency = characterFrequenciesTable[character]; //declare a variable "frequency" that stores the value (frequency) of our current character in the characterFrequenciesTable.
          
          if (character in maxFrequencyTable) { // use an if condition to check if the current character exists in our maxFrequencyTable. If it does, run the block of code below...
              
              maxFrequencyTable[character] = Math.max(frecuency, maxFrequencyTable[character]); //the new value (frequency) for our current character is the max value between our current frecuency from line 39 and the frequency
              //for the character found in our maxFrequencyTable. Our goal is to keep the max frequency of a character needed to form every single word in our original array of words. 
              
          } else {
              maxFrequencyTable[character] = frecuency; //if the current character doesn't have a key value pair in our maxFrequencyTable, create a new key with the current character and value with it's frequency from line 39.
          }
      }
  }
  
  function resultArrayFromMaxFrequencyTable(hashTable) { //this is our third and last helper function. It's job is to convert our maxFrequencyTable into an array that lists all the characters as many times as the max frequency
      //need to form all words. 
      
      let resultsArray = []; //declare a variable that stores an empty array. This array will be filled in the next step.
      
      for (const [key, value] of Object.entries(hashTable)) { // use a for of loop to iterate through our hash table (this would be our maxFrequencyTable). Deconstruct it's key and value pairs. We use the Object.entries method
          //to access both key and value at the same time and to aforementioned deconstruction. 
          
          for (let i = 0; i < value; i++) { // for every value (integer representing max frequency)...
              resultsArray.push(key) // push the key (current character) into the results array. This would ensure all keys are push as many times as the amount of value. 
          }
  }
      return resultsArray; //by the end of the for of loop, we should have an array with characters and the max amount of frequencies needed. Therefore, we just return that results array. 
  }


