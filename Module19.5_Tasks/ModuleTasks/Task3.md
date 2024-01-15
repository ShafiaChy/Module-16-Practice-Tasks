### Task-3a

Write a JavaScript code to sort the array numbers without using the sort method.

**Input:**
<br>
`var numbers = [8, 4, 15, 3, 10];`

**Output:**
<br>
` Original array: [8, 4, 15, 3, 10]`
<br>
`Sorted array: [3, 4, 8, 10, 15]`

**Solution:**
<br>

    var numbers = [8, 4, 15, 3, 10];

<br>

    for (var i = 0; i < numbers.length - 1; i++) {
    for (var j = 0; j < numbers.length - 1 - i; j++) {
    if (numbers[j] > numbers[j + 1]) {

          var temp = numbers[j];
          numbers[j] = numbers[j + 1];
          numbers[j + 1] = temp;
        }
      }
    }

<br>
console.log("Sorted array:", numbers);

---

### Task-3b

Write JavaScript code to use the sort method to sort the numbers array in `descending order` (from largest to smallest). Log both the original array and the sorted array to the console

**Input:**
<br>
`var numbers = [5, 9, 10, 12, 1];`

**Output:**
<br>

`Original array: [5, 9, 10, 12, 1]`
<br>

`Sorted array: [ 12, 10, 9, 5, 1 ]`

**Solution:**
<br>

        var numbers = [5, 9, 10, 12, 1];
        var sortedNumbers = numbers.slice().sort((a, b) => b - a);

console.log("Original array:", numbers);
<br>
console.log("Sorted array:", sortedNumbers);
