## Task-1

Write a function that takes two parameters (message and time) displays message after an increasing given time interval. `Use setTimeout`

    function showMessage(message, delay) {
      setTimeout(() => {
        console.log(message);
      }, delay);
    }


    showMessage("Hello", 1000);
    showMessage("How are you?", 2000);
    showMessage("Goodbye!", 3000);

---

## Task - 2

Display a time with the help of a JavaScript function that logs time `every 2 seconds` using `setInterval`. After logging `5 times`, stop logging using `clearInterval`.

        let count = 0;


        let interval = setInterval(function () {

        count += 1;


        if (count === 5) {
            clearInterval(interval);
        }


            let dateTime = new Date();
            let time = dateTime.toLocaleTimeString();
            console.log(time);
        }, 2000);

---

## Task for students

Write a javaScript function `publishFunnyBlog()` that takes two parameters `blog title` and delay time.

**Input:**
<br>
`setTimeout(publishFunnyBlog, 5000);`

<br>

**Output:**

    The Ultimate Guide to Programming Puns and Jokes!
