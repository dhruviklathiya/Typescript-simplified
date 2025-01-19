// A simple class decorator
function Logger(target: Function) {
    console.log(`Class ${target.name} has been created.`);
  }
  
  // Applying the decorator to a class
  @Logger
  class User {
    constructor(public id: number, public name: string) {}
  }
  
  const user = new User(1, "Dhruvik");
  // Output: Class User has been created.
  console.log(user);
  