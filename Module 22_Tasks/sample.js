function removeDuplicates(arr) {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    // Check if the element is not already in the uniqueArray
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

// Example usage:
const inputArray = [1, 2, 3, 4, 3, 2, 5, 6, 7, 8, 8, 9];
const resultArray = removeDuplicates(inputArray);

console.log(resultArray);
