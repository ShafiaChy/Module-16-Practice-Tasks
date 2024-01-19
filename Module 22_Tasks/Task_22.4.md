## Calculate the wood requirements

Your task is to calculate the `total amount of wood` required to furnish a room based on the following wood requirements for each furniture item:

        Each chair = 3 cft
        Each table = 10 cft
        Each bed = 50 cft

Write a JavaScript function named `calculateWoodRequirements` that takes in the number of `chairs, tables, and beds` and returns the `total cubic feet of wood required`.

<br>

**Input:**
<br>

`const totalWoodRequired = calculateWoodRequirements(4, 2, 1);`

**Output:**
<br>

82

**Solution**

        const chairWood = 3;
        const tableWood = 10;
        const bedWood = 50;

        function calculateWoodRequirements(numChairs, numTables, numBeds) {
          const totalWood =
            numChairs * chairWood + numTables * tableWood + numBeds * bedWood;

          return totalWood;
        }

        const totalWoodRequired = calculateWoodRequirements(4, 2, 1);
        console.log(totalWoodRequired);
