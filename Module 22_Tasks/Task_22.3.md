## Remove duplicates from an array

Write a JavaScript function to remove duplicate items from an array. The function should take an array as input and return a new array with only unique elements.

<br>

**Input:**
<br>
`const inputArray = [1, 2, 3, 4, 3, 2, 5, 6, 7, 8, 8, 9]`

**Output:**
<br>
[1, 2, 3, 4, 5, 6, 7, 8, 9]

<br>

**Solution:**
<br>

    function removeDuplicates(arr) {
      let uniqueArray = [];

      for (let i = 0; i < arr.length; i++) {

        if (uniqueArray.indexOf(arr[i]) === -1) {
          uniqueArray.push(arr[i]);
        }
      }

      return uniqueArray;
    }
