## Find the average of the odd numbers in an array

Write a function `findOddAverage()` that will take an array as the input parameter and will `return the average of the odd numbers`.

<br>

**Input:**
<br>

`const inputArray = [5, 7, 8, 10, 45, 30]`

**Output:**
<br>
19

**Solution**
<br>

    function findOddAverage(arr) {
      let sumOdd = 0;
      let countOdd = 0;

      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
          sumOdd += arr[i];
          countOdd++;
        }
      }

      const averageOdd = sumOdd / countOdd;
      return averageOdd;
    }

    const inputArray = [5, 7, 8, 10, 45, 30];
    const result = findOddAverage(inputArray);

    console.log(result);
