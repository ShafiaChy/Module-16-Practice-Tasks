function calculateAverage(m1, m2, m3) {
  let totalMarks = m1 + m2 + m3;
  const averageScore = totalMarks / 3;
  return parseFloat(averageScore.toFixed(2)); // Round to two decimal places
}

console.log(calculateAverage(75.25, 92, 88));
