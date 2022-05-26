function searchTriplets(array) { //this function takes an unsorted array of positive and negative numbers. 

    array.sort((a,d) => a - d); //use the array sort method to sort the array in ascending order. Pass call back function to sort method for proper sorting. Check documentation. 

    const triplets = []; //declare a variable "triplets" that is initialized with an empty array. This array will eventually store valid subarrays; nested inside. 

    for (let i = 0; i < array.length; i++) { //use a for loop to traverse the array. 

        if (i > 0 && array[i] === array[i - 1]) { //use an if condition to check if the current number is equal to the number on it's left. If that's the case we continue because we cannot have duplicates in 
            //our subarray. Also this condition runs only when i > 0, otherwise (if i = 0) there is no number at array[i - 1].

            continue;
            
        }

        searchPair (array, -array[i], i + 1, triplets); //call a helper function "searPair" that is defined below. This function takes the following arguments: the sorted array, -1(current number), i + 1 and the 
        //the triplets array. We multiply the current number times -1 because we have negative numbers on the left side of our sorted array. Our goal is to find a pair of numbers, other than the current number, that
        //add up to the current number. 
    }

    return triplets; // at this point we should have traversed the sorted array, found triplets that add to zero and push those subarrays into the triplets array. Therefore, we just return it. 
}

function searchPair (array, targetSum, left, triplets) { //the parameter "left" will be called with i + 1. This will serve as our left pointer. 

    let right = array.length - 1; //declare a variable "right" that is initialized with the index of the last element in our sorted array. This will serve as the right pointer. 

    while (left < right) { //use a while loop to check if the sum of pairs (one number from each pointer) addds to the targetSum. This while loop will run only when the left pointer is less than the right pointer. 
        //otherwise we would be revisiting numbers. 

        let currentSum = array[left] + array[right]; //declare a variable "currentSum" that is initialized with the number at the left pointer plus the number at the right pointer. 
 
        if (targetSum === currentSum) { //check if the targetSum (-array[i]) is equal to the currentSum. If truthy, this means we have a valid triplet. 

            triplets.push([-targetSum, array[left], array[right]]); //we push the following into the triplets array: negative targetSum, number at left pointer and the number at right pointer. The reason we push
            //negative targetSum is because we initially multiplied it by -1 to calculate the targetSum. Now we need to give it is negative sign back. 

            left++; //move the left pointer to the right by one. 

            right--; //move the right pointer to the right by one. 

            while (left < right && array[left] === array[left - 1]) { //use a while loop to skip the same elements to avoid duplicate triplets. 

                left++; //move the left pointer to the right by one. 
            } 

            while (left < right && array[right] === array[right + 1]) { //use a while loop to skip the same elements to avoid duplicate triplets. 

                right--; //move the right pointer to the right by one. 
            }
        } else if (targetSum > currentSum) { //if this condition is truthy, our currentSum is too small. Therefore we move the left pointer one position to the right. By doing this we move to a number closer to 0 or positive. This
            //would increase our currentSum and we get closer to the targetSum. 

            left++; //move the left pointer to the right by one. 

        } else { //if this condition is truthy, our currentSum is too large. Therefore we move the rightpointer one position to the left. By doing this we move to a number closer to 0 or negative. This
            //would decrease our currentSum and we get closer to the targetSum. 

            right--; //move the right pointer to the right by one. 
        }
    }
}

