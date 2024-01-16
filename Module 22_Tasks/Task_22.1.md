## Can you find out who will get the delicious cake?

This year, not only Jim & Dela but also Chinku are doing hard work to secure the first position. Can you find out who will get the delicious cake?
<br>

**Input-1:**
<br>
`const heights1 = [157, 134, 188];`

**Output-1:**
<br>
188

<br>

**Input-2:**
<br>
`const heights2 = [167, 190, 120, 165, 137];`

**Output-2:**
<br>
190

**Solution:**
<br>

    function findTallest(heights) {
      let tallest = heights[0];

      for (let i = 1; i < heights.length; i++) {
        if (heights[i] > tallest) {
          tallest = heights[i];
        }
      }

      return tallest;
    }
