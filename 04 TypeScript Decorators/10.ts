// Advanced Union Type Example
type Animal = { species: string; sound(): void };
type Vehicle = { model: string; drive(): void };

type Hybrid = Animal | Vehicle;

function describe(entity: Hybrid) {
  if ("sound" in entity) {
    console.log(`This is an animal of species: ${entity.species}`);
    entity.sound();
  } else if ("drive" in entity) {
    console.log(`This is a vehicle of model: ${entity.model}`);
    entity.drive();
  }
}

const dog: Animal = { species: "Dog", sound: () => console.log("Woof!") };
const car: Vehicle = { model: "Tesla", drive: () => console.log("Driving!") };

describe(dog); // Output: 'This is an animal of species: Dog' followed by 'Woof!'
describe(car); // Output: 'This is a vehicle of model: Tesla' followed by 'Driving!'
