function longestSubstring (string, k) {
    let windowStart = 0;
    let maxLength = 0;
    const hashMap = new Map();

    for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
        let rightChar = string[windowEnd];
         if (!hashMap.has(rightChar)) {
            hashMap.set(rightChar, 1)
        } else {
            hashMap.set(rightChar, (hashMap.get(rightChar))+1);   
        }

        while (hashMap.size > k) {
            let leftChar = string[windowStart];
            hashMap.set(leftChar, (hashMap.get(leftChar))-1); 
            if (hashMap.get(leftChar) === 0) hashMap.delete(leftChar);
            windowStart++;
        }
        maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    }
    return maxLength;
}

