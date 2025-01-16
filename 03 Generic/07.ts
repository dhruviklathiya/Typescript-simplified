// A function to find the first element of an array
function firstElement<T>(arr: T[]): T | undefined {
    return arr[0];
  }
  
  const numbers = [10, 20, 30];
  const strings = ["Hello", "World"];
  
  console.log(firstElement(numbers)); // Output: 10
  console.log(firstElement(strings)); // Output: Hello
  