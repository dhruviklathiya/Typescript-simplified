// Define an interface
interface User {
  id: number; // User ID
  name: string; // User name
  email: string; // User email address
  isActive: boolean; // User activity status
}

// Create a user object adhering to the User interface
const user: User = {
  id: 1,
  name: "Dhruvik",
  email: "dhruvik@example.com",
  isActive: true,
};

// Access object properties
console.log(`User: ${user.name}, Email: ${user.email}`);
