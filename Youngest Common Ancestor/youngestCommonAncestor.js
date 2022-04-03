class AncestralTree {
    constructor(name) {
      this.name = name;
      this.ancestor = null;
    }
  }
  
  function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
    const depthOne = calculateDescDepth(descendantOne, topAncestor);//declare a const variable depthOne that stores the result of calling the calculateDescDepth helper function. It will calculate the descendant's depth. 
      const depthTwo = calculateDescDepth(descendantTwo, topAncestor);//declare a const variable depthOne that stores the result of calling the calculateDescDepth helper function.
  
      if (depthOne > depthTwo) {//declare a conditional that checks if the depth of descendatOne is greater than descentTwo. This condition is reversed in the else code block. If truthy, return the result of 
      //calling the backTrackAncestralTree helper function. 
          
          return backTrackAncestralTree(descendantOne, descendantTwo, Math.abs(depthOne - depthTwo))//the backTrackAAncestralTree helper function takes both descendants (the lower one first) and the difference between
          //both depths as arguments. 
      } else {
          return backTrackAncestralTree(descendantTwo, descendantOne, Math.abs(depthOne - depthTwo))
      }
  }
  
  function backTrackAncestralTree (lowerDescendant, higherDescendant, diff) {
      while (diff > 0) {//declare a while loop that runs only if the difference between both descendant's depth is greater than 0. If it is 0, that means both descendants are at the same level in the ancestral tree.
          //Our objective is to get both descents on the same level in the tree; meaning their depths are the same. 
          
          lowerDescendant = lowerDescendant.ancestor;//since diff > 0, reassign the value of lowerDescendant(the descendant with the higher depth) to it's ancestor. We traveling upward in the tree until we reach the 
          //same level as the higher descendant (the one with the lower depth)
          
          diff--;//once we have climbed up a level, subtract 1 from the diff so we can get closer to our goal of diff equals to 0. 
      }
      
      //At this point both descendants would be at the same depth level. 
      while (lowerDescendant !== higherDescendant) {//declare a while loop that runs while the lower descendant doesn't equal the higher descendant. We want them to be equal as this would be the point at which they
          //meet aka youngest common ancestor. 
          
          lowerDescendant = lowerDescendant.ancestor;//reassign the value of lower descendant to its ancestor. This will happen until lower descendant is equal to higher descendant. 
          higherDescendant = higherDescendant.ancestor;//reassign the value of lower descendant to its ancestor. This will happen until higher descendant is equal to lower descendant. 
      }
      
      return higherDescendant;//here we can return either lower descendant or higher descendant as they are equal at this point. Both should be the same value which in turn is the youngest common ancestor. 
  } 
  
  function calculateDescDepth (descendant, topAncestor) {//this function calculates each descentant's depth. It takes a descendant and the top ancestor as arguments. 
      let depth = 0 //declare a variable depth that stores the value of zero to start off a depth accumulation. 
      while (descendant !== topAncestor) {//declare a while loop that runs if descendant doesn't equal the top ancestor. This would mean that the descendant is somewhere at a lower level in the ancestral tree and 
          //we want to calculate the distance to the top ancestor. Depth is the difference between the descentant's current depth and the top ancestor's depth. 
          
          descendant = descendant.ancestor; //reassign the value of descendant to it's ancestor. We want to climb upwards in the tree until we reach that top ancestor. Our accumulated steps upward would be the descendant's depth.
          depth++; //add 1 to depth everytime we have climp up the tree. This means descendant is now it's ancestor. 
      }
      return depth;//finally return the depth which should have accumulated the descentant's final depth value. 
  }
  