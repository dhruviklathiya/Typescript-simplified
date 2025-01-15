// Define a generic interface for a response
interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
  }
  
  // Using the interface with a specific type
  const userResponse: ApiResponse<{ id: number; name: string }> = {
    data: { id: 1, name: "Dhruvik" },
    status: 200,
    message: "Success",
  };
  
  console.log(userResponse);
  