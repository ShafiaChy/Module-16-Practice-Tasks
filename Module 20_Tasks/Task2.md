### Task-1

Write a JavaScript function called `calculateAverage` that takes multiple parameters. Each parameter is the mark. The function should calculate and return the `average` score of the student. Ensure that the average is rounded to `two decimal` places.

**Input:**
<br>
`const averageScore = calculateAverage(75.25, 92, 88);`

**Output:**

<br>
`85.08`

**Solution**
<br>
const values = [6, 8, 2, 4, 10];
<br>

    function calculateAverage(m1, m2, m3) {
      let totalMarks = m1 + m2 + m3;
      const averageScore = totalMarks / 3;
      return parseFloat(averageScore.toFixed(2)); // Round to two decimal places
    }

console.log(averageScore);
