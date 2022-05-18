function removeKFromArray (array, k) {
  
    let i = 1;
    let j = 0;
  
    while (i < array.length) {
      if (array[j] === k && array[i] !== k) {
        [array[j], array[i]] = [array[i], array[j]]
        j++
      }
  
      i++
    }
    return j;
  }


  