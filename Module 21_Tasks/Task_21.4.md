## Even or Odd

Write a JavaScript program that takes `an array of numbers` and prints whether each number in the array is `odd or even`. Use a loop to iterate through the array.

<br>

**Input:**
<br>

`const numberArray = [2, 7, 10, 15, 24]`

**Output:**
<br>

        Sum of odd numbers: 22
        Sum of even numbers: 36

**Solution**
<br>

    function sumOddEven(numbers) {
      let sumOdd = 0;
      let sumEven = 0;

      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
          sumEven += numbers[i];
        } else {
          sumOdd += numbers[i];
        }
      }

      console.log("Sum of odd numbers: " + sumOdd);
      console.log("Sum of even numbers: " + sumEven);
    }

    const numberArray = [2, 7, 10, 15, 24];
    sumOddEven(numberArray);
