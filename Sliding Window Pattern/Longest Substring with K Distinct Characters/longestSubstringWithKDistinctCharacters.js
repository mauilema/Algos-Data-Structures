function longestSubstring (string, k) {

    let windowStart = 0; //declare a variable "windowStart" that will serve as a pointer to the first index of our substring windows. We initialize it with the value 0 as our first substring will begin at the first index 
    //within our input string.

    let maxLength = 0; //declare a variable "maxLength" that is going to eventually hold the longest length of all the valid substrings found. We initialize it with the value 0 because we want to return 0 if no valid 
    //substrings are found and thus no maxLength is available. 

    const hashMap = new Map(); //declare a variable "hashMap" that is initialized with a new map of size 0. We will use map methods to manipulate the data inside the hashMap. 

    for (let windowEnd = 0; windowEnd < string.length; windowEnd++) { //use a for loop to iterate throughout the entire input string. WindowEnd will serve a pointer to the index at the end of our substring windows. 

        let rightChar = string[windowEnd]; //declare a variable "rightChar" that is initialized with the value of the character at the current windowEnd index. 

         if (!hashMap.has(rightChar)) { //use an if condition to check if the hashMap doesn't have a key with the current rightChar. If that condition is truthy...

            hashMap.set(rightChar, 1) //set a new key with the current rightChar and a value of 1.
            
        } else { //if the hashMap already has a key with the current rightChar...

            hashMap.set(rightChar, (hashMap.get(rightChar))+1); //add 1 to the value of that key. 
        }

        while (hashMap.size > k) { //once the hashMap has a size that is greater than K, we have disatisfied our distinct character condition (we have an extra distinct character). Therefore, we want to shrink our window
            // from the left to satisfy our distinct character condition. 

            let leftChar = string[windowStart]; //declare a variable "leftChar" that is initialized with the value of the character at the current windowStart index. Remember, this pointer was initialized at 0. 

            hashMap.set(leftChar, (hashMap.get(leftChar))-1); //our first step of the shrinking process is to start decreasing the value of the key (in our hashMap) at the current leftChar. We subtract that value by 1 everytime we hit this line. 

            if (hashMap.get(leftChar) === 0) hashMap.delete(leftChar); //use an if condition to check if the value of the key at the current leftChar is strictly equal to 0. If that is truthy, we can delete that key from the hasMap.

            windowStart++; //now we want to move the windowStart pointer to the right by one. Therefore, we add 1 to it. This will help us shrink from left to right until we meet our distint character (K) condition and get out of 
            //this while loop. 
        }

        maxLength = Math.max(maxLength, windowEnd - windowStart + 1); //every time our while loop is done, we want to store the maximum length of our valid substring window in our maxLength variable. Therefore, we use the Math.max method
        //to compare the current value of maxLength versus the new calculated value in each subString. The largest value will win. 
    }
    return maxLength; //by this point, we should have iterated through the entire input string using the outer for loop. We should have covered all valid subStrings and calculated the max length subString with the help of our while loop.
    //Therefore, we just return our final maxLength value. 
}

