function bubbleSort(array) {
	let sorted = false; //this variable is set to false so that it's value will be changed to true inside 
	//the while loop. Once the for loop is done, sorted = true and !sorted = falsy; thus concluding the 
	//function by returning the sorted array
	let lastElCounter = 0;
	//the above accumulator will increase by 1 everytime the for loop is done iterating. At this point, the last
	//element in the array is in order. So we exclude that last element on the next for loop iteration by
	//subtracting the accumulator from the array length
	while (!sorted) {  //while !sorted is truthy run the code block inside the while loop
		sorted = true; //changes sorted's value from false to true. Once the for all is done all iterations,
		//this value will remain true and cause !sorted to be false which allows the code to conclude
		for (let i = 0; i < array.length-1-lastElCounter; i++) { //loop through the array, stop at the last
			//element in the array, subtract 1 from the array length after each full iteration
			if (array[i] > array[i+1]){//if the value of the element is greater than the vulue of the element 
				//next to it on it's right side, swap those elements
				swapEl(i,i+1,array); //call back function that swaps 2 elements in the array
				sorted = false;//set sorted to false so that the while loop can continue until all array 
				//iterations/swapping has concluded
			}	
		}
		lastElCounter++
	}
	return array;//once all iterations/swapping is done, return the final sorted array
}

function swapEl (i, j, array) {//sway array's elements using their index as arguments
	[array[i], array[j]] = [array[j], array[i]]
}

