### Task-1

Write a JavaScript loop (using either for or while) to traverse the given array values. During the traversal, calculate the `sum` of all elements in the array.

**Input:**
<br>
const values = [6, 8, 2, 4, 10];

**Output:**

<br>
30

**Solution**
<br>
const values = [6, 8, 2, 4, 10];
<br>
let summation = 0;

    for (let i = 0; i < values.length; i++) {
        summation += values[i];
    }

console.log(summation);

---
