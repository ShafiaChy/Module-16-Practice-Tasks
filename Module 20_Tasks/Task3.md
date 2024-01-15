### Task-2

Write a JavaScript function called `sumArray` that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

**Input:**
<br>
`var numbers = [1, 2, 3, 4, 5];`
<br>
`var arraySum = sumArray(numbers);`

**Output:**
<br>

`15`

**Solution**
<br>

    function sumArray(numbers) {
    var total = 0;

        for (var i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }

        return total;

    }

<br>
var arraySum = sumArray(numbers);
<br>
console.log(arraySum);
