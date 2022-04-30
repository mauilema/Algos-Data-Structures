
function minimumWindowSubstring(str, targets) {
    let counts = {};
    let missingChars = targets.length;
    let result = [0, Infinity];
    
    for (let i = 0; i < targets.length; i++) {
      counts[targets[i]] = 0;
    }
    
    let left = 0;
    for (let right = 0; right < str.length; right++) {
      if (str[right] in counts) {
        counts[str[right]]++;
        if (counts[str[right]] === 1) {
          missingChars--;
        }
      }
      
      while (missingChars === 0) {
        if ((right - left) < (result[1] - result[0])) {
          result = [left, right];
        }
        
        if (str[left] in counts) {
          counts[str[left]]--;
          if (counts[str[left]] === 0) {
            missingChars++;
          }
        }
        left++;
      }
    }
    
    console.log("COUNTS: ", counts);
    console.log("MISSING CHARS: ", missingChars);
    console.log("RESULT: ", result);
    
    if (result[1] === Infinity) {
      return "";
    } else {
      return str.slice(result[0], result[1] + 1);
    }
  }
  
  console.log(minimumWindowSubstring("ADOBECODEBANC", "ABC"));