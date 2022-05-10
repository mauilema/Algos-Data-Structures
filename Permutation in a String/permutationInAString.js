function permutationInAString (string, pattern) {
    const hashMap = new Map();
    let windowStart = 0;
    let match = 0;

    for (char of pattern) {
        if (!hashMap.has(char)) {
            hashMap.set(char, 1)
        } else {
            hashMap.set(char, hashMap.get(char)+1)
        }
    }
    
    for (let windowEnd = 0; windowEnd < string.length; windowEnd++) {
        let rightChar = string[windowEnd];

        if (hashMap.has(rightChar)) {
            hashMap.set(rightChar, hashMap.get(rightChar)-1);
            
            if (hashMap.get(rightChar) === 0) match++;
        }

        if (match === hashMap.size) return true;

        if ((windowEnd - windowStart + 1) >= pattern.length) {
            let leftChar = string[windowStart];
            windowStart++;
            if (hashMap.has(leftChar)) {
                if (hashMap.get(leftChar) === 0) match--;
                hashMap.set(leftChar, hashMap.get(leftChar)+1)
            }
            
        }
    }


    return false;
}


permutationInAString("oidbcaf", "abc");

