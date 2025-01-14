let numbers: number[] = [50, 10, 20, 40, 30];

// Sort numbers in ascending order
let sortedAsc = numbers.slice().sort((a, b) => a - b);
console.log(sortedAsc); // Output: [10, 20, 30, 40, 50]

// Sort numbers in descending order
let sortedDesc = numbers.slice().sort((a, b) => b - a);
console.log(sortedDesc); // Output: [50, 40, 30, 20, 10]
