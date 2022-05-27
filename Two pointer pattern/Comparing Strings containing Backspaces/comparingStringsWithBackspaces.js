function comparingStrings (str1, str2) {
    if (deleteWithBackspace(str1) === deleteWithBackspace(str2)) return true;
  
    return false;
    
  }
  
  
  function deleteWithBackspace(string) {
    if (!string.includes("#")) {
      return string;
    }
    
    let leftPointer = 0;
    let rightPointer = string.length - 1;
  
    while (leftPointer < rightPointer) {
      let leftChar = string[leftPointer];
      let rightChar = string[rightPointer];
  
      if (leftChar !== "#") leftPointer++;
      if (rightChar !== "#") rightPointer--;
      
    }
  
    return `${string.slice(0, leftPointer - 1)}${string.slice(rightPointer + 1)}`
  }

  