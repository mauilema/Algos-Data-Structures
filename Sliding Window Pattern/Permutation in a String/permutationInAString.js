function permutationInAString (string, pattern) {

    const hashMap = new Map(); //declare a varaible "hashMap" that is initialized with a new map. This hashMap will serve as a dictionary for all the characters and their frequencies from the pattern string. 

    let windowStart = 0; //declare a variable "windowStart" that is initialized with 0. This will serve as a pointer to the start of a valid subString window. 

    let match = 0; //declare a variable "match" that is initialized with 0. It will accumulate all the amount of matching characters we find inside the input string. We will use our hashMap to determine if a character
    //matches the same character in our pattern. 

    for (char of pattern) { //use a for of loop to iterate through the pattern string. We will be making a hashMap that includes all the characters as keys and their frequencies as values. 

        if (!hashMap.has(char)) { //use an if condition to check if the current character doesn't exist in the hasmap. If that is truthy...

            hashMap.set(char, 1) //add a new key with that char name and a value of 1. 

        } else {

            hashMap.set(char, hashMap.get(char)+1) //otherwise, if the current character exists in our hashMap, just add 1 to it's value to account for it's frequency. 
        }
    }
    
    for (let windowEnd = 0; windowEnd < string.length; windowEnd++) { //use a for loop to iterate through our input string. Our current index will serve as a pointer to the last index of our current substring window. 

        let rightChar = string[windowEnd]; //declare a variable "rightChar" that is initialized with the character at the current index in the input string. 

        if (hashMap.has(rightChar)) { //use an if condition to check if our rightChar is found in our hashMap. If that is truthy...

            hashMap.set(rightChar, hashMap.get(rightChar)-1); //subtract one from that rightChar's value in our hashMap. Since we have found one of the matching characters (we may have repeating characters in our pattern), 
            //we want to cross that value of off our hashMap. 
            
            if (hashMap.get(rightChar) === 0) match++; //once the value of a rightChar in our hashMap is 0, we have completely matched the frequency of that character. Therefore, we add 1 to our match variable. 
        }

        if (match === hashMap.size) return true; //use an if condition to check if the value of match is strictly equal to the size of the hashMap. At this point, we have matched all characters and their corresponding 
        //frequencies, therefore return true. The number of characters matched is equal to the number of distinct characters in the pattern (i.e., total characters in the HashMap), we have gotten our required permutation.

        if ((windowEnd - windowStart + 1) >= pattern.length) { //use an if condition to check if the length of our current substring window is greater than or equal to the length of our pattern string. If that is truthy,
            //it means it's time to start shrinking this window from the left before we expand again to the right. The length of our pattern determines how long our valid substring window can be. 

            let leftChar = string[windowStart]; // declare a variable "leftChar" that is initialized with the character at the current windowStart index in the input string. Remember windowStart is a pointer to the first 
            //character in our substring window. 

            windowStart++; //add one to our left pointer aka windowStart. This is done to shrink the current window from the left, before we expand to the right. 

            if (hashMap.has(leftChar)) { //use an if condition to check if the current leftChar exists in our hashMap. If that is the case...

                if (hashMap.get(leftChar) === 0) match--; //use another if condition to check if the value of the current leftChar is striclty equal to 0. If that is truthy, we want to subtract 1 from our match variable. 
                //The fact that we have made it to this line without returning true means that the current substring window has a matching character but not a matching permutation. Therefore, we want to start our matching
                //permutation search over again   
                
                hashMap.set(leftChar, hashMap.get(leftChar)+1) //add one to the value of our current leftChar in our hashMap. Since our current leftChar (which is being removed in our shrinking process) was a matching character,
                //we want to add it's frequency back to our hashMap for our next permutation search. 
            }
            
        }
    }


    return false; //at this point we have traversed throught our entire input string, expanding substring windows until allowed then shrunk them, and found no matching permutation of the pattern. Therefore our function returns False. 
}



