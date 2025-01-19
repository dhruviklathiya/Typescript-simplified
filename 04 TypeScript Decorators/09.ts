// Creating a type that makes all properties optional except one
type OptionalExceptFor<T, K extends keyof T> = Partial<T> & Pick<T, K>;

// Example
interface User {
  id: number;
  name: string;
  email: string;
}

const user: OptionalExceptFor<User, "id"> = {
  id: 1, // Required
  name: "Dhruvik", // Optional
};

console.log(user);
