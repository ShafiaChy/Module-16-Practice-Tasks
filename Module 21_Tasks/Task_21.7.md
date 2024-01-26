## Swapping using temp variable

Write a JavaScript program that swaps the values of two variables using a temp variable.

        let a = 5;
        let b = 10;

        let temp = a;
        a = b;
        b = temp;

        console.log("After swapping: a =", a, ", b =", b);

## Swapping using destructuring assignment

Write a JavaScript program that swaps the values of two variables using destructuring assignment.

    let x = 15;
    let y = 20;
    [x, y] = [y, x];

    console.log("After swapping: x =", x, ", y =", y);
