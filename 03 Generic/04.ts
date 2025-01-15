// Restrict the type with an interface
interface HasLength {
    length: number;
  }
  
  // A generic function that works only with types having a 'length' property
  function logLength<T extends HasLength>(item: T): void {
    console.log(`Length: ${item.length}`);
  }
  
  // Valid usage
  logLength("Hello"); // Output: Length: 5
  logLength([1, 2, 3]); // Output: Length: 3
  logLength({ length: 10 }); // Output: Length: 10
  
  // Invalid usage (uncommenting will cause an error)
  // logLength(42); // Error: Argument of type 'number' is not assignable to type 'HasLength'
  