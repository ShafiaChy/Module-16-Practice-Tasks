### Task-1

Loop through an object and print the key-value pairs with their `types`

**Input:**
<br>

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};

**Output:**

<br>

    key: name | type:  string
    key: age | type:  number
    key: city | type:  string
    key: isStudent | type:  boolean

**Solution**
<br>

var myObject = {

        name: "John Doe",
        age: 25,
        city: "Example City",
        isStudent: true,

};

        for (var key in myObject) {
        var value = myObject[key];
        var type = typeof value;
        console.log("key:", key + " | type: ", type);
        }

---

### Task-2

Loop through an object and count the `number of properties`

**Input:**
<br>

let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};

**Output:**

<br>

    key: name | type:  string
    key: age | type:  number
    key: city | type:  string
    key: isStudent | type:  boolean

**Solution**
<br>

var myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};

    var propertyCount = 0;

    for (var key in myObject) {
      propertyCount++;
    }

    console.log("Number of properties:", propertyCount);
