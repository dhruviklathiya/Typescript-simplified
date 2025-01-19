// Numeric Enum
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
  }
  
  // String Enum
  enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST",
  }
  
  // Using Enums
  const move = Direction.Up;
  const role: Role = Role.Admin;
  
  console.log(move); // Output: 1
  console.log(role); // Output: 'ADMIN'
  