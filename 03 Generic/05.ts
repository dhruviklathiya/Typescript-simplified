// A generic function with a default type
function createArray<T = string>(item: T, count: number): T[] {
    return Array(count).fill(item);
  }
  
  // Using default type
  const defaultArray = createArray("default", 3); // ['default', 'default', 'default']
  
  // Specifying a different type
  const numberArray = createArray<number>(42, 3); // [42, 42, 42]
  
  console.log(defaultArray, numberArray);
  