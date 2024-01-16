function findOddAverage(arr) {
  let sumOdd = 0;
  let countOdd = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sumOdd += arr[i];
      countOdd++;
    }
  }

  const averageOdd = sumOdd / countOdd;
  return averageOdd;
}

const inputArray = [5, 7, 8, 10, 45, 30];
const result = findOddAverage(inputArray);

console.log(result);
