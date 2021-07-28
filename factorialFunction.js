//FACTORIAL FUNCTION
// Write function below
const factorial = (num) => {
  let n = 1;
  for (let i = 1; i <= num; i++) {
    n *= i;
  }
  return n;
}
factorial(6)