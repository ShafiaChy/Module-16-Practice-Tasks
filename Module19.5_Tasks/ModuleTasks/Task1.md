### Task-1

Write a JavaScript loop (using either for or while) to traverse the given array values. During the traversal, calculate the `sum` of all elements in the array.

**Input:**
<br>
var values = [6, 8, 2, 4, 10];

**Output:**

<br>
30

**Solution**
<br>
var values = [6, 8, 2, 4, 10];
<br>
var summation = 0;

    for (var i = 0; i < values.length; i++) {
        summation += values[i];
    }

console.log(summation);

---
