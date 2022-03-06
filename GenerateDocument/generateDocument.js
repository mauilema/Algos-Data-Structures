function generateDocument(characters, document) {
	const uniqueCharCount = {}; //declare a constant variable storing an empty object
	for (const char of characters) { //loop through the characters string 
		if (!(char in uniqueCharCount)) uniqueCharCount[char] = 0; //if the char being iterated is not found in the empty obj
		//uniqueCharcount, add a new key with that character name and a value of 0
		uniqueCharCount[char]++;//add 1 to the value of the key just added to the obj uniqueCharCount
	}
	for (const char of document) {//loop through the document string
		if (!(char in uniqueCharCount) || uniqueCharCount[char] === 0) return false;
		//if the character being iterated is not in the uniqueCharCount of if the value of that char(key) is 
		//strictly equal to 0, then return false
		uniqueCharCount[char]--;//if the character being iterated is in the uniqueCharCount, subtract 1 from 
		//it's value
	}
  return true;//if all unique characters in the document string are found in the characters string, 
	//return true
}