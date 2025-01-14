let numbers: number[] = [1, 2, 3, 4, 5];

// Check if all numbers are positive
let allPositive = numbers.every((num) => num > 0);
console.log(allPositive); // Output: true

// Check if any number is greater than 4
let anyGreaterThanFour = numbers.some((num) => num > 4);
console.log(anyGreaterThanFour); // Output: true
