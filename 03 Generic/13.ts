// Constrain to only objects with specific keys
type ExtractKey<T, K extends keyof T> = T[K];

// Define an interface
interface Product {
  id: number;
  name: string;
  price: number;
}

// Extract specific key type
const productName: ExtractKey<Product, "name"> = "Laptop";
console.log(productName); // Output: 'Laptop'
