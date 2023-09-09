// Create a function that takes a sorted array and a target value.
// Return the index of the target value in the array.
// If the target value is not in the array, return -1.

// Poor performance o(n) complexity
function search(arr, target) {
  for (let i = 0; arr.length; i++) {
    if (arr[i] === target) return i;
  }
}

// o(log n) approach
export function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  console.log(start, end);

  if (start > end) {
    console.log('Not found!');
    return -1;
  }

  const middle = Math.floor((start + end) / 2);
  if (arr[middle] === target) {
    console.log(`${target} Found at index ${middle}`);
    return arr[middle];
  }

  if (arr[middle] > target) {
    return binarySearch(arr, target, start, middle - 1);
  }

  if (arr[middle] < target) {
    return binarySearch(arr, target, middle + 1, end);
  }
}

const arr = ['a', 'b', 'c', 'x', 'y', 'z'];
console.log(binarySearch(arr, 'z'));
