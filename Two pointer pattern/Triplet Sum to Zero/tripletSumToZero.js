function searchTriplets(array) {
    array.sort((a,d) => a - d);
    const triplets = [];

    for (let i = 0; i < array.length; i++) {
        if (i > 0 && array[i] === array[i - 1]) {
            continue;
        }
        searchPair (array, -array[i], i + 1, triplets);
    }

    return triplets;
}

function searchPair (array, targetSum, left, triplets) {
    let right = array.length - 1;

    while (left < right) {
        let currentSum = array[left] + array[right];

        if (targetSum === currentSum) {
            triplets.push([-targetSum, array[left], array[right]]);
            left++;
            right--;

            while (left < right && array[left] === array[left - 1]) {
                left++;
            } 

            while (left < right && array[right] === array[right + 1]) {
                right--;
            }
        } else if (targetSum > currentSum) {
            left++;
        } else {
            right--;
        }
    }
}

