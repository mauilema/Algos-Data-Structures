function balancedBrackets(string) {
    const openingBrackets = "([{"; //define a variable that stores the opening brackets inside a string 
    const closingBrackets = ")]}"; //define a variable that stores the closing brackets inside a string 
    const matchingBrackets = {")":"(", "]":"[", "}": "{"}; //define a variable that stores an object; it acts like a 
    //dictionary where each type of closing bracket is paired with its matching opening bracket.  
    const stack = []; //define a variable that will store an empty array; it will stack all the opening brackets which
    //will be popped off of the array as a matching closing bracket is found while iterating through the string
    for (const char of string) { //we're using a for of loop because we're only interested in the values of the characters in the string
        if (openingBrackets.includes(char)) { //if the opening brackets string includes the character being iterated;
            //then push that character into the stack 
            stack.push(char);
        } else if (closingBrackets.includes(char)) { //otherwise if the closing brackets array includes the character;
            //first check if the stack is NOT empty. If it is empty, then return false as there is no possibility to find 
            //a complementarty opening bracket in the stack
            if (stack.length === 0) return false;
            if (stack[stack.length-1] === matchingBrackets[char]) { //If the last element in the opening brackets stack is strictly equal
                //to the matching opening bracket in the matching brackets dictionary; 
                //then pop that opening bracket off of the stack
                stack.pop()
            } else {
                return false //if none of the top conditions are truthy, then return false
            }
        }
    }
        return stack.length === 0; // the stack should be empty at the end probing that each opening bracket has a pair and 
        //is in the correct order. Line 25 should return true if that is the case. 
    }
    