function longestUniqueSubstring(s) {
    let charFrequency = {},
      left = 0,
      currentLongestWindow = -Infinity;
  
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      if (!charFrequency[char]) charFrequency[char] = 0;
    }
    
    for (let right = 0; right < s.length; right++) {
      let rightChar = s[right];
     
        charFrequency[rightChar]++;
  
        while (charFrequency[rightChar] > 1) {
          let leftChar = s[left];
  
          charFrequency[leftChar]--;
          left++;
        }
  
      let currentUniqueSubstring = s.slice(left, right + 1);
      
      currentLongestWindow =  currentUniqueSubstring.length > currentLongestWindow ? currentUniqueSubstring.length : currentLongestWindow
  
    }
      
    
     return currentLongestWindow;
    
  }