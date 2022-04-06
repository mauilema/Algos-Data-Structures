function arrayOfProducts(array) {
  const productsArray = []; //declare a const variable productsArray that stores and empty array. Later on, products will be pushed into this array for our final result. 
	
	
	for (let i = 0; i < array.length; i++) { //Use a for loop to iterate throught the elements in the input array. 
		
		let accumulatingProduct = 1; //declare a variable that stores the number 1 as the beginning product. We don't use 0 because any number times 0 equals 0. We will be multiplying every number except one by this
		//running product. 
		
		for (let j = 0; j < array.length; j++) { //we use another for loop to iterate through the elements in the input array again. The first for loop will give us a reference of the index holding the element we don't 
		//want to multiply by the running product (aka accumulatingProduct). This for loop will give us access to the other elements we do want to multiply by the accumulatingProduct. 	
			
			if (i !== j) {//this conditional makes sure that there is one element that doesn't get multiplied by the accumulatingProduct. Each element will take a turn being the one left our of the multiplication. This
				//is done is an orderly fashion with the use of the first for loop. 
				
				accumulatingProduct *= array[j];//every other number in the input array gets multiplied by the accumulatingProduct;
			}
			productsArray[i] = accumulatingProduct; //after multiplying every other number in the input array by the accumulatingProduct, assign that final value of the accumulating product to the final productsArray at
			//the pertaining index i. This process will be done for every iteration of the first for loop; meaning it will be done for every element in the input array. 
		}
	}
	return productsArray; //once both for loops are finished, the productsArray variable should be storing all the products necessary in the correct order/index. Therefore we return productsArray to conclude this function.  
}
