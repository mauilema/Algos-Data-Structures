function bubbleSort(array) {
	//This function will run a nested loop. The first loop takes care of covering the amount of n number of elements in the array. We have to make sure we sort the array in place n number of times. 
  for (let i = 0; i < array.length; i++) {
		
		for (let j = 0; j < array.length; j++) { //The second loop compares the number index i vs the number in index i + 1. It swaps the numbers if the number on the left (at index i)  is greater than the number on 
			//the right (index i + 1). The purpose is to bubble up the larger number to the end of the array; starting with the first number in the array. By the end of the first instance (there will be n number of instances
			//depending on the number of elements in the array) of this loop, not all elements will be sorted. We still need to repeat this loop for the remaining number of elements left in the array. 
			
			if (array[j] > array[j + 1]) [array[j], array[j + 1]] = [array[j + 1], array[j]]; //We use an if condition to check if the current number in the array is greater than it's neighbor to the right. It truthy, then
			//we use new ES6 syntax to swap the elements in place. 
		}
	}
	return array; //By the end of both for loops. All elements in the array should have been sorted in place. Therefore we just return the array. 
}