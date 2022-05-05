function findSmallestSubarrayWithSum (array, S) {

    let windowStart = 0; //declare a variable "windowStart" that inititally stores the number 0. This variable will serve as a pointer to the first index in our subarray window. This will be moved as we need later on. 

    let windowSum = 0; //declare a variable "windowSum"  that initially stores the number 0. This variable will serves a an accumulator for the sum of the elements inside the valid subarray windows found. This sum will be
    //used to check if we have met the condition where our sum is greater than or equal to the value of S.  

    let minLength = Number.MAX_VALUE; //declare a variable "minLength" that initially stores the maximum number value in JavaScript. We use this value to take into account edge cases where the input array might be really long 
    //and the value of S might be really long. The value of our subarray lenth returned might be really large and we don't want our initial minLength value to conflict with it. 
    
    for (let windowEnd = 0; windowEnd < array.length; windowEnd++) { //use a for loop to iterate through the entire input array. The variable "windowEnd" will serve as a pointer to the index of our current element as well as
        // the end of our current subarray window. 

        windowSum += array[windowEnd]; //add the value of our current element to the accumulating windowSum. We want to start from the first number (element) and add each number to the right, one by one, until we reach our 
        //objective which is a sum that is greater than or equal to S.  

        while (windowSum >= S) { //use a while loop that runs when our accumulating sum "windowSum" is greater than or equal to S. At this point we have found our valid first subarray window. Therefore, we want to start shrinking
            //this window from the left to reach our second objective which is to find the smallest valid subarray possible. 

            minLength = Math.min(minLength, windowEnd - windowStart + 1); // since we found a valid subarray window, we want to reassign the value of minLength which keeps track of our smallest subarray length found. Since the 
            //initial value of minLength is so large, the new value of minLength will be the difference between the windowEnd pointer(index) and the windowStart pointer(index). We add 1 to that difference because indeces in an 
            //array start at 0. The calculation will not be correct as we want to know the length of that window. Since an array's index is usually one number behind it's length, adding 1 to an index will give us the length desired.   

            windowSum -= array[windowStart]; // to start shrinking the valid subarray window(in order to search for the smallest length subarray), first we subtract the number at the start of our found valid subarray window. 

            windowStart++ // then we move the pointer of windowStart one to the right. This will complete the shriking desired. Now, if at this point windowSum is less than 7, we will break out of this while loop and continue
            //iterating the outer for loop. If the windowSum is still valid (greater than or equal to 7), then we will keep shrinking as we look for the smallest subarray length until it is invalid. This is allow us to break and go
            //back to iterating the outer for loop. 
        }
    }
    return minLength === Number.MAX_VALUE ? 0 : minLength; //At this point, we should have a valid minLength given valid subarrays (whose sum is greater than or equal to 7). Therefore we return the valid minLength if found. Otherwise,
    //we return 0. The latter condition would mean that no valid subarrays where found and the value of minLength never changed from it's original value. 
}

