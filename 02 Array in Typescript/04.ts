let numbers: number[] = [10, 20, 30, 40, 50];

// Find the first element greater than 25
let found = numbers.find((num) => num > 25);
console.log(found); // Output: 30

// Find the index of the first element greater than 25
let index = numbers.findIndex((num) => num > 25);
console.log(index); // Output: 2

// Check if a specific value exists
let exists = numbers.includes(20);
console.log(exists); // Output: true
