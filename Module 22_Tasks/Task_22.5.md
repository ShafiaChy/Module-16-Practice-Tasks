## Find the cheapest phone

You are `given an array of phone objects`, each containing information about the `model, brand, and price`. Your task is to write a JavaScript function named `findCheapestPhone` that takes this `array as input` and returns the `details of the cheapest phone`.

**Input**

<br>

        const phones = [
            { model: "PhoneA", brand: "Iphone", price: 500 },
            { model: "PhoneB", brand: "Samsung", price: 400 },
            { model: "PhoneC", brand: "Oppo", price: 600 },
            { model: "PhoneD", brand: "Nokia", price: 450 },
            { model: "PhoneE", brand: "Iphone", price: 550 },
            { model: "PhoneF", brand: "Nokia", price: 480 },
        ];

**Output**
<br>

`{ model: 'PhoneB', brand: 'Samsung', price: 400 }`

**Solution**
<br>

        function findCheapestPhone(phoneArray) {
          if (phoneArray.length === 0) {
            return "No phones provided.";
          }

          let cheapestPhone = phoneArray[0];

          for (let i = 1; i < phoneArray.length; i++) {
            if (phoneArray[i].price < cheapestPhone.price) {
              cheapestPhone = phoneArray[i];
            }
          }

          return cheapestPhone;
        }

        const cheapestPhone = findCheapestPhone(phones);

        console.log(cheapestPhone);
