// Define a generic interface for a function
interface Processor<T> {
    (input: T): T;
  }
  
  // A function that implements the interface
  const reverseString: Processor<string> = (input) => input.split("").reverse().join("");
  const doubleNumber: Processor<number> = (input) => input * 2;
  
  console.log(reverseString("Dhruvik")); // Output: 'kivurhD'
  console.log(doubleNumber(42)); // Output: 84
  