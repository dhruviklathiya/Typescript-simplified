// A generic function with two type parameters
function combine<T, U>(first: T, second: U): [T, U] {
    return [first, second];
  }
  
  // Using the function with different types
  const pair1 = combine<string, number>("Age", 25);
  const pair2 = combine<boolean, string>(true, "isAdmin");
  
  console.log(pair1); // Output: ['Age', 25]
  console.log(pair2); // Output: [true, 'isAdmin']
  