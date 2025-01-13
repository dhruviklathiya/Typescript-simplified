// A simple TypeScript example

// Define a TypeScript type for a User
type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
  };
  
  // Create a function to print user details
  function printUser(user: User): void {
    console.log(`User Details:
    ID: ${user.id}
    Name: ${user.name}
    Email: ${user.email}
    Active: ${user.isActive ? 'Yes' : 'No'}`);
  }
  
  // Create a user object with the User type
  const user1: User = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    isActive: true,
  };
  
  // Call the function
  printUser(user1);
  
  // Example of an enum
  enum Status {
    Pending,
    InProgress,
    Completed,
  }
  
  // A function using enums
  function getStatusMessage(status: Status): string {
    switch (status) {
      case Status.Pending:
        return 'The task is pending.';
      case Status.InProgress:
        return 'The task is in progress.';
      case Status.Completed:
        return 'The task is completed.';
      default:
        return 'Unknown status.';
    }
  }
  
  console.log(getStatusMessage(Status.InProgress));
  
  // Example of a generic function
  function wrapInArray<T>(value: T): T[] {
    return [value];
  }
  
  console.log(wrapInArray<number>(42)); // Output: [42]
  console.log(wrapInArray<string>('Hello, TypeScript!')); // Output: ['Hello, TypeScript!']
  