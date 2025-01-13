// Function with typed parameters and return type
function greet(name: string, isMorning: boolean): string {
    return isMorning ? `Good morning, ${name}!` : `Hello, ${name}!`;
  }
  
  // Call the function
  console.log(greet("John doe", true));
  console.log(greet("John doe", false));
  