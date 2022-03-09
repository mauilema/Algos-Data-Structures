function caesarCipherEncryptor(string, key) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz' //this value will serve as a pool of alphabetically assorted letters for referencing their index and value 
    //once the index is shifter by the key value
    let shiftedStr = '' // this variable will accumulate all the shifted letters. A final shifted string will be returned at the end. 
    
    for (let i = 0; i < string.length; i++) { //loop through letters in the given string, stop at the length of the string
        let newChar; //declare a new character value that will be defined based on it's value; whether it is an empty string or a new shifted character
        if (string[i] !== ' ') { //run the below block of code only if the value of i at that iteration is not an empty string
          let indexOfCharInAlph = alphabet.indexOf(string[i]) //use the indexOf method to get the index of the current letter being iterated at the alphabet string
                      
            if (key >= 26) { //makes sure that the value of key doesn't surpass the amount of letters in the alphabet; 26 letters
                key = key - 26
            }
          let indexPlusKey = indexOfCharInAlph + key //adds the value of key to the index of the current letter to get it's new position in the alphabet string

            if (indexPlusKey >= 26) { //makes sure that the new index wraps around the alphabet; so it doesn't go past the 26 letters limit
                indexPlusKey = indexPlusKey - 26
            }
        
            newChar = alphabet[indexPlusKey] //defines the value of the new character after applying the index it is to be shifted by
          
        } else {
            newChar = ' ' //accounts for the spaces in between letters in the given string. If there is an empty string, return an empty string and don't shift
        }
       
        shiftedStr += newChar //accumulates all the new shifted characters after each iteration of the given string
    }
    return shiftedStr //returns the final accumulated string after having shifter it's characters
}

  