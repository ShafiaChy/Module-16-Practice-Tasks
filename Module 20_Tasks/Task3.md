### Task-2

Write a JavaScript function called `sumArray` that takes an array of numbers as a parameter and returns the sum of all the numbers in the array.

**Input:**
<br>
`const numbers = [1, 2, 3, 4, 5];`
<br>
`const arraySum = sumArray(numbers);`

**Output:**
<br>

`15`

**Solution**
<br>

    function sumArray(numbers) {
    let total = 0;

        for (let i = 0; i < numbers.length; i++) {
            total += numbers[i];
        }

        return total;

    }

<br>
const arraySum = sumArray(numbers);
<br>
console.log(arraySum);
