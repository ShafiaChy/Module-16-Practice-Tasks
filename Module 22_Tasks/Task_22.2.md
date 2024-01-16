## Who is the tallest?

Tom and his friends are participating in the "Who is the tallest?" competition. As per the name, the person with the highest height will be the winner. Can you find who is the tallest among Tom and all of his friends?
<br>

**Input-1:**
<br>
`const scores1 = [84, 99, 77];`

**Output-1:**
<br>
Dela

<br>

**Input-2:**
<br>
`const scores2 = [69, 97, 99];`

**Output-2:**
<br>
Chinku

**Solution:**
<br>

    function findCakeWinner(scores) {
      const jimScore = scores[0];
      const delaScore = scores[1];
      const chinkuScore = scores[2];

      if (jimScore > delaScore && jimScore > chinkuScore) {
        return "Jim";
      } else if (delaScore > jimScore && delaScore > chinkuScore) {
        return "Dela";
      } else {
        return "Chinku";
      }
    }
