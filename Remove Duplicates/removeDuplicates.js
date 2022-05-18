function removeDuplicates (array) {

    let j = 1;
    
    for (let i = 0; i < array.length; i++) {
      
        let currNum = array[i]; 
        let otherNum = array[j];
  
        if (currNum === otherNum) {
          array.splice(j, 1);
          j--;
        }
  
        j++;
      
    }
  
    return array.length;
}   



