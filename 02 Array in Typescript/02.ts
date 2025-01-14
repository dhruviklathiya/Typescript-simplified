let fruits: string[] = ["Apple", "Banana"];

// Add elements at the end
fruits.push("Cherry");
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

// Add elements at the beginning
fruits.unshift("Orange");
console.log(fruits); // Output: ['Orange', 'Apple', 'Banana', 'Cherry']

// Remove the last element
fruits.pop();
console.log(fruits); // Output: ['Orange', 'Apple', 'Banana']

// Remove the first element
fruits.shift();
console.log(fruits); // Output: ['Apple', 'Banana']
