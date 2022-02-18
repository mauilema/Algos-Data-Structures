function bubbleSort(array) {
	let sorted = false;
	let lastElCounter = 0;
	while (!sorted) {
		sorted = true;
		for (let i = 0; i < array.length-1-lastElCounter; i++) {
			if (array[i] > array[i+1]){
				swapEl(i,i+1,array);
				sorted = false;
			}	
		}
		lastElCounter++
	}
	return array;
}

function swapEl (i, j, array) {
	[array[i], array[j]] = [array[j], array[i]]
}

<!--Comments to come soon...-->
