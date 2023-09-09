const arr = [1, 2, 3, 3, 4, 5];
console.log(arr);

const arr2 = Array(100)
  .fill(0)
  .map((_, i) => i + 1);
console.log(arr2);

const arr3 = [...Array(100).keys()];
console.log(arr3);

const unique = [...new Set(arr)];
console.log(unique);

for (const val of arr) {
  console.log(val);
}

// Avoid using for in, use this instead
for (const [i, val] of arr.entries()) {
  console.log(i, val);
}

arr.forEach();
arr.map();
arr.filter();
arr.find();
arr.findIndex();
arr.reduce();
