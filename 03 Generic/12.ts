// Combine two types into one
function merge<T, U>(first: T, second: U): T & U {
    return { ...first, ...second };
  }
  
  // Usage
  const person = merge({ name: "Dhruvik" }, { age: 25 });
  console.log(person); // Output: { name: 'Dhruvik', age: 25 }
  