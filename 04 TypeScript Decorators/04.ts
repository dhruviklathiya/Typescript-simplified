// Partial: Makes all properties optional
interface User {
    id: number;
    name: string;
  }
  
  const partialUser: Partial<User> = { name: "Dhruvik" };
  
  // Required: Makes all properties required
  interface UserWithOptional {
    id?: number;
    name?: string;
  }
  
  const fullUser: Required<UserWithOptional> = { id: 1, name: "Dhruvik" };
  
  // Pick: Select specific properties
  const pickedUser: Pick<User, "id"> = { id: 1 };
  
  // Omit: Remove specific properties
  const omittedUser: Omit<User, "id"> = { name: "Dhruvik" };
  
  console.log(partialUser, fullUser, pickedUser, omittedUser);
  