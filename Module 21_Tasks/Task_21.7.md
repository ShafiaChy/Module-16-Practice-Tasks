## Swapping using temp variable

        let a = 5;
        let b = 10;

        let temp = a;
        a = b;
        b = temp;

        console.log("After swapping: a =", a, ", b =", b);

## Swapping using destructuring assignment

    let x = 15;
    let y = 20;
    [x, y] = [y, x];

    console.log("After swapping: x =", x, ", y =", y);
