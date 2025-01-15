// A generic function to wrap a value in an array
function wrapInArray<T>(value: T): T[] {
    return [value];
}
  // Using the function with different types
    const numArray = wrapInArray<number>(42); // Output: [42]
    const strArray = wrapInArray<string>("Hello"); // Output: ['Hello']
    console.log(numArray, strArray);