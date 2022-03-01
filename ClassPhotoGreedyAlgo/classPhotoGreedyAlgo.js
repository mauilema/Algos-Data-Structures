function classPhotos(redShirtHeights, blueShirtHeights) {
	//the sort helper function is defined below, under this function
	sort(redShirtHeights) //sort array in descending order
	sort(blueShirtHeights) //sort array in descending order
	let firstRow; //initiate a variable which will be set to a redShirts or blueShirts string 
	//depending on which array goes in the first row 
	
	if (redShirtHeights[0] < blueShirtHeights[0]) { //compare the largest number in both arrays. The largest of those 2 numbers determines which array
	//goes in the front row
		firstRow = 'redShirts' //redShirtHeights array goes in the front row
	} else {
		firstRow = 'blueShirts' //blueShirtHeights array goes in the front row
	}
	for (let i = 0; i < redShirtHeights.length; i++) { //loop through either either array as they have the same lenght. In this case, I chose the redShirtHeights array
		if (firstRow === 'redShirts') { //run this block of code if the redShirtHeights array is in the front row, namely if the condition in the parenthesis is truthy
			if (redShirtHeights[i] >= blueShirtHeights[i]) return false; //check if the current element in the front row array is greater than the current element in the back row array 
			//return false if the above condition is truthy
		} else if (blueShirtHeights[i] >= redShirtHeights[i]) return false; //run this block of code if the blueShirtHeights array is in the front row
			//check if the current element in the front row array is greater than the current element in the back row array 
			//return false if the above condition is truthy
		}
		
  return true; // each student in the back row is taller than the student directly in front of them in the front row
}