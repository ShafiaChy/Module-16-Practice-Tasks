### Task-1a

Write a JavaScript loop (using either for or while) to reverse the array `originalArray` without using the reverse method.

**Input:**
<br>
`var values = [5, 9, 14, 8, 3]`

**Output:**
<br>
`Original array: [5, 9, 14, 8, 3]`
<br>
`Reversed array: [3, 8, 14, 9, 5]`

**Solution:**
<br>
var originalArray = [5, 9, 14, 8, 3];
<br>
var reversedArray = [];
<br>
<br>

    for (var i = originalArray.length - 1; i >= 0; i--) {
      reversedArray.push(originalArray[i]);
    }

console.log("Original array:", originalArray);
<br>
console.log("Reversed array:", reversedArray);

---

### Task-2b

Write JavaScript code to use the reverse method to reverse the order of elements in the wordArray. Log the original array and the reversed array to the console.

**Input:**
<br>
`var wordArray = ['apple', 'banana', 'cherry', 'date'];`

**Output:**
<br>
`Original array: ['apple', 'banana', 'cherry', 'date']`
<br>
`Reversed array: ['date', 'cherry', 'banana', 'apple']`

**Solution:**
<br>

const wordArray = ['apple', 'banana', 'cherry', 'date'];
<br>

    var reversedArray = wordArray.slice().reverse();

<br>

console.log("Original array:", wordArray);
<br>
console.log("Reversed array:", reversedArray);
