// Given an array of integers, calculate the cumulative sum of the array

const arr = [1, 3, 5, 7];

// Normal approach
const normalSum = arr.reduce((acc, cur) => acc + cur, 0);

// Non built-in functions approach
export function cumSum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total;
}

const total = cumSum(arr);
console.log(total);
