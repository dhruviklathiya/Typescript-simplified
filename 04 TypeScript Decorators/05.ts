// Union Types
type Vehicle = "Car" | "Bike" | "Truck";

function getVehicleType(type: Vehicle): string {
  return `You selected ${type}.`;
}

console.log(getVehicleType("Car")); // Output: 'You selected Car.'

// Intersection Types
interface Engine {
  horsepower: number;
}

interface Wheels {
  count: number;
}

type Car = Engine & Wheels;

const car: Car = {
  horsepower: 150,
  count: 4,
};

console.log(car); // Output: { horsepower: 150, count: 4 }
