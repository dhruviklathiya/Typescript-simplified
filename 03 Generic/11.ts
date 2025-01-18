// Utility type using Generics
type ReadOnly<T> = {
    readonly [K in keyof T]: T[K];
  };
  
  // Applying ReadOnly to an object
  interface User {
    id: number;
    name: string;
  }
  
  const readonlyUser: ReadOnly<User> = { id: 1, name: "Dhruvik" };
  
  // readonlyUser.id = 2; // Error: Cannot assign to 'id' because it is a read-only property
  console.log(readonlyUser); // Output: { id: 1, name: 'Dhruvik' }
  