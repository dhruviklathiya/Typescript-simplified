let numbers: number[] = [1, 2, 3, 4, 5];

// Remove 2 elements starting at index 1
let removed = numbers.splice(1, 2);
console.log(removed); // Output: [2, 3]
console.log(numbers); // Output: [1, 4, 5]

// Add elements at index 1
numbers.splice(1, 0, 6, 7);
console.log(numbers); // Output: [1, 6, 7, 4, 5]
