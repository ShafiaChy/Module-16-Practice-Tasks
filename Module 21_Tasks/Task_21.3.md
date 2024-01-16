## Even or Odd

Write a JavaScript program that takes `an array of numbers` and prints whether each number in the array is `odd or even`. Use a loop to iterate through the array.

<br>

**Input:**
<br>

`const numberArray = [2, 7, 10, 15, 24];`

**Output:**
<br>

        2 is even
        7 is odd
        10 is even
        15 is odd
        24 is even

**Solution**
<br>

    const numberArray = [2, 7, 10, 15, 24];

        for (let i = 0; i < numberArray.length; i++) {
          if (numberArray[i] % 2 === 0) {
            console.log(numberArray[i] + " is even.");
          } else {
            console.log(numberArray[i] + " is odd.");
          }
        }
