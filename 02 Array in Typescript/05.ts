let numbers: number[] = [1, 2, 3, 4, 5];

// Multiply each number by 2
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Filter out odd numbers
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Reduce to calculate the sum of numbers
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15
