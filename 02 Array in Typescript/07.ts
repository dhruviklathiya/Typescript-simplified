let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6];

// Combine arrays
let combined = arr1.concat(arr2);
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

// Slice a portion of an array
let sliced = combined.slice(1, 4);
console.log(sliced); // Output: [2, 3, 4]
