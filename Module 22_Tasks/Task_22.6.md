## Calculate the total cost of the products in a shopping cart

Write a JavaScript function named `calculateTotalCost` that takes an array of `product objects` as input and returns the `total cost` of all the products ordered.

**Input**
<br>

        const products = [

          { name: "shirt", price: 25 },
          { name: "belt", price: 30 },
          { name: "pant", price: 15 },
          { name: "shoe", price: 40 },

        ];

**Output**
<br>

110

**Solution**
<br>

        function calculateTotalCost(productArray) {
          if (productArray.length === 0) {
            return "No products in the shopping cart.";
          }

          let totalCost = 0;

          for (let i = 0; i < productArray.length; i++) {
            totalCost += productArray[i].price;
          }

          return totalCost;
        }

---

## Part - 2

Calculate the total cost of the products in a shopping cart each product has `name, price & quantity`.

**Input**
<br>

        const products = [
            { name: "shirt", price: 25, quantity: 2 },
            { name: "belt", price: 30, quantity: 1 },
            { name: "pant", price: 15, quantity: 3 },
            { name: "shoe", price: 40, quantity: 2 },
        ];

**Output**
<br>

205

**Solution**
<br>

        function calculateTotalCost(productArray) {
          if (productArray.length === 0) {
            return "No products in the shopping cart.";
          }

          let totalCost = 0;

          for (let i = 0; i < productArray.length; i++) {
            totalCost += productArray[i].price * productArray[i].quantity;
          }

          return totalCost;
        }
