// A function to merge two objects
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }
  
  const merged = mergeObjects({ name: "Dhruvik" }, { age: 25 });
  console.log(merged); // Output: { name: 'Dhruvik', age: 25 }
  